import os
import pymongo
import re
from flask import Flask, render_template, make_response, json
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
client = pymongo.MongoClient(os.environ.get('dict_mongo_read'))
cluster = client['dict']


class APIError(Exception):
    message = Exception.args
    code = 404
    pass


def has_cyrillic(text):
    return bool(re.search('[а-яА-Я]', text))


def is_integer(n):
    try:
        float(n)
    except ValueError:
        return False
    else:
        return float(n).is_integer()


def are_params_okay(word, limit):
    if not word or not limit or not is_integer(limit):
        return False
    if int(limit) > 20:
        return False
    else:
        return True


@app.errorhandler(APIError)
def handle_exception(err):
    response = {"error": err.message}
    return response, err.code


@app.errorhandler(500)
def handle_exception():
    response = {
        "error": "Hopsz, úgy tűnik valami gond van a szerverrel. Elnézést. Kérünk, próbálkozz később."}
    return response, 500


@app.route('/')
def index():
    return render_template("index.html", flask_token="Hello world")


@app.route('/api/dict/<word>/<limit>')
def getRU(word, limit):
    lower_case_word = word.lower()
    print(lower_case_word)
    if not are_params_okay(lower_case_word, limit):
        raise APIError(
            'Hopsz. Úgy tűnik rossz paramétereket adtál meg. Próbáld újra.')
    if has_cyrillic(lower_case_word):
        collString = 'RU'
        collection = cluster.RU
    else:
        collString = 'HU'
        collection = cluster.HU
    result = list(collection.find(
        {f'{collString}': {'$regex': f'.*{lower_case_word}.*'}}, {'_id': 0}).limit(int(limit)))
    if len(result) < 1:
        raise APIError(
            'Hopsz. Sajnos ez a szó még nem szerepel az adatbázisunkban, vagy nem létezik.')
    response = json.jsonify({'result': result})
    return response


if __name__ == "__main__":
    app.run(debug=True)
