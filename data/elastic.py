from elasticsearch import Elasticsearch
import pandas as pd
import numpy as np
import names
from datetime import datetime
import time
import json
import random

# Password for the 'elastic' user generated by Elasticsearch and the fingerprint of the certificate
with open('data/keys.json', 'r') as f:
    keys = json.load(f)
    ELASTIC_PASSWORD = keys['ELASTIC_PASSWORD']
    CERT_FINGERPRINT = keys['CERT_FINGERPRINT']

# Create the client instance
client = Elasticsearch(
    "https://localhost:9200",
    ssl_assert_fingerprint=(CERT_FINGERPRINT),
    basic_auth=("elastic", ELASTIC_PASSWORD)
)
# in case there already exists the index
client.options(ignore_status=[400,404]).indices.delete(index='dating_profiles')

# Successful response!
print(client.info())
# {'name': 'instance-0000000000', 'cluster_name': ...}
data = pd.read_csv('data/okcupid_profiles.csv')
data['name'] = np.nan
data['username'] = np.nan
data['password'] = np.nan
data['matchmaker'] = np.nan
data['matchmaking'] = np.nan
data['id'] = np.nan
dataToStore = ['id','name', 'age','sex','height','location','orientation','religion', 'income', 'education']
# delete not needed categories
for column in data:
    if column not in dataToStore:
        print(column)
        data.drop(column,axis=1,inplace=True)

df = data.replace({np.nan: None}) # replace with None instead of np.nan since elastic does not parse np.nan

colleges = [{"name":"Auburn University", "gpa":2.5, 'location':"Alabama"}, {"name":"University of Arkansas", "gpa":2.2, "location":"Arkansas"},{"name":"University of Arizona", "gpa":2.9, "location":"Arizona"}, {"name":"California Institute of Technology", "gpa":3.7, "location":"California"}, {"name":"California Institute of Technology", "gpa":3.7, "location":"California"}, {"name":"UCLA", "gpa":3.5, "location":"California"}, {"name":"The Ohio State University", "gpa":3.3, "location":"Ohio"}, {"name":"Stanford", "gpa":3.8, "location":"California"}, {"name":"Butler University", "gpa":2.0, "location":"Indiana"}, {"name":"University of Maryland", "gpa":3.4, "location":"Maryland"}]

# Store the First 100 Dating Profiles into dating_profiles index in Elastic
for i in range(0, 400, 2):
    fname1 = names.get_first_name()
    lname1 = names.get_last_name()
    name1 = fname1 + ' ' + lname1
    username1 = lname1 + fname1 + str(i + 1)
    fname2 = names.get_first_name()
    lname2 = names.get_last_name()
    name2 = fname2 + ' ' + lname2
    username2 = lname2 + fname2 + str(i + 2)
    if df.loc[i, 'sex'] == 'm':
        df.loc[i, 'gpa'] = random.uniform(2.0, 4.0)
        #df.loc[i, 'act'] = int(random.uniform(18.0, 36.0))
        df.loc[i, 'education'] = "High School student"
        df.loc[i, 'college'] = ""
    else:
        item = random.choice(colleges)
        df.loc[i, 'college'] = item['name']
        df.loc[i, 'gpa'] = item['gpa']
        df.loc[i, 'location'] = item['location']
    df.loc[i, 'name'] = name1
    df.loc[i, 'orientation'] = 'straight'
    df.loc[i, 'username'] = username1
    df.loc[i, 'password'] = 'pw'
    df.loc[i, 'matchmaker'] = username2
    df.loc[i, 'matchmaking'] = username2
    df.loc[i, 'id'] = i+1
    json = df.loc[i].to_dict()
    json['usersLiked'] = []
    json['mProfiles'] = []
    json['approvedProfiles'] = []
    json['chat'] = {}
    print(json)
    client.index(index="dating_profiles", id=i+1, document=json)
    df.loc[i, 'gpa'] = random.uniform(2.0, 4.0)
    df.loc[i, 'name'] = name2
    df.loc[i, 'orientation'] = 'asexual'
    df.loc[i, 'username'] = username2
    df.loc[i, 'password'] = 'pw'
    df.loc[i, 'matchmaker'] = username1
    df.loc[i, 'matchmaking'] = username1
    df.loc[i, 'id'] = i+2
    json = df.loc[i].to_dict()
    json['usersLiked'] = []
    json['mProfiles'] = []
    json['approvedProfiles'] = []
    json['chat'] = {}
    print(json)
    client.index(index="dating_profiles", id=i+2, document=json)
