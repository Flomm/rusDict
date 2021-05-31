import os
import pymongo


def dict_reader(path, ord):
    try:
        file = open(path, encoding='utf-8')
        line = file.readlines()
        dict = []
        for l in line:
            ls = l[:len(l) - 1]
            arr = ls.split(';')
            row_obj = {ord[0]: arr[0], ord[1]: arr[1], 'pos': arr[2]}
            if len(arr) > 3:
                row_obj['gender'] = arr[3]
            dict.append(row_obj)
        file.close()
        return dict
    except:
        print('Error while reading the file. Check if it exists.')


def db_filler(dict_obj, dict_name):
    try:
        client = pymongo.MongoClient(os.environ.get('mongo'))
        cluster = client['dict']
        db = cluster[dict_name]
        for article in dict_obj:
            db.insert_one(article)
        print('Success!')
    except:
        print('Wrong database name, or other error occured.')


db_filler(dict_reader('./data/ru.txt', ['RU', 'HU']), 'RU')
db_filler(dict_reader('./data/hu.txt', ['HU', 'RU']), 'HU')
