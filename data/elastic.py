from elasticsearch import Elasticsearch
import pandas as pd
import numpy as np
import names
from datetime import datetime
import time


# Password for the 'elastic' user generated by Elasticsearch
ELASTIC_PASSWORD = "lWwjJoVHt50J00-WaYzm"

# CERT_FINGERPRINT
CERT_FINGERPRINT = "B7:F7:50:A9:18:D7:E4:B9:AD:48:F9:82:93:74:09:39:23:45:67:C7:6C:5C:3C:6B:35:B9:DA:4C:C4:B1:7F:86"

# Create the client instance
client = Elasticsearch(
    "https://localhost:9200",
    ssl_assert_fingerprint=(CERT_FINGERPRINT),
    basic_auth=("elastic", ELASTIC_PASSWORD)
)

# Successful response!
print(client.info())
# {'name': 'instance-0000000000', 'cluster_name': ...}
data = pd.read_csv('data/okcupid_profiles.csv')
data['name'] = np.nan
dataToStore = ['id','name', 'age','sex','height','location','orientation','religion', 'income', 'education']
# delete not needed categories
for column in data:
    if column not in dataToStore:
        print(column)
        data.drop(column,axis=1,inplace=True)

df = data.replace({np.nan: None}) # replace with None instead of np.nan since elastic does not parse np.nan

# Store the First 100 Dating Profiles into dating_profiles index in Elastic
for i in range(100):
    df.loc[i, 'name'] = names.get_full_name()
    json = df.loc[i].to_dict()
    print(json)
    client.index(index="dating_profiles", id=i+1, document=json)
    #time.sleep(2)





