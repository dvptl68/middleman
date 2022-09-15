import pandas as pd
import sys
import names
import numpy as np
from flask import Flask
from flask_restful import Resource, Api, reqparse
import ast

data = pd.read_csv('okcupid/okcupid_profiles.csv')
data['name'] = np.nan
dataToStore = ['id','name', 'age','sex','height','location','orientation','religion', 'income', 'education']
# delete not needed categories
for column in data:
    if column not in dataToStore:
        print(column)
        data.drop(column,axis=1,inplace=True)

class Users(Resource):
    
    def get(self):                
        i = np.random.choice(200)
        data.loc[i, 'name'] = names.get_full_name()
        json = data.loc[i].to_dict()
        # json = data.iloc[i].to_json('data'+ str(i) + '.json')
        return json
    # methods go here
    pass
    
class Locations(Resource):
    # methods go here
    pass

app = Flask(__name__)
api = Api(app)

api.add_resource(Users, '/users')  # '/users' is our entry point for Users
api.add_resource(Locations, '/locations')  # and '/locations' is our entry point for Locations
if __name__ == '__main__':
    app.run(debug=True)