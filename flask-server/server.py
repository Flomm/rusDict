import os
import pymongo
from flask import Flask, render_template, make_response

app = Flask(__name__)
client = pymongo.MongoClient(os.environ.get('dict_mongo_read'))
cluster = client['dict']


class APIError(Exception):
    message = Exception.args
    code = 404
    pass


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


# @app.after_request
# def after_request_func(data):
#     response = make_response(data)
#     response.headers['Content-Type'] = 'application/json'
#     return response


@app.route('/')
def index():
    return render_template("index.html", flask_token="Hello world")


@app.route('/api/RU/<word>/<limit>')
def getRU(word, limit):
    if not are_params_okay(word, limit):
        raise APIError(
            'Hopsz. Úgy tűnik rossz paramétereket adtál meg. Próbáld újra.')
    response = list(cluster.RU.find(
        {'RU': {'$regex': f'.*{word}.*'}}, {'_id': 0}).limit(int(limit)))
    if len(response) < 1:
        raise APIError(
            'Hopsz. Sajnos ez a szó még nem szerepel az adatbázisunkban, vagy nem létezik.')
    return {'result': response}


@app.route('/api/HU/<word>/<limit>')
def getHU(word, limit):
    if not are_params_okay(word, limit):
        raise APIError(
            'Hopsz. Úgy tűnik rossz paramétereket adtál meg. Próbáld újra.')
    response = list(cluster.HU.find(
        {'HU': {'$regex': f'.*{word}.*'}}, {'_id': 0}).limit(int(limit)))
    if len(response) < 1:
        raise APIError(
            'Hopsz. Sajnos ez a szó még nem szerepel az adatbázisunkban, vagy nem létezik.')
    return {'result': response}


if __name__ == "__main__":
    app.run(debug=True)
