from datetime import datetime
from elasticsearch import Elasticsearch, helpers
import configparser
# password
# FGs2odBSOX*T2gS8sl55
# HTTP Fingerprint
# 4973741232cbcdb5af1c95c33a5c15f90baa0679ad8d57d581414b5ef2f53778
# enrollment token
# eyJ2ZXIiOiI4LjQuMiIsImFkciI6WyIxNzIuMTguMC4yOjkyMDAiXSwiZmdyIjoiNDk3Mzc0MTIzMmNiY2RiNWFmMWM5NWMzM2E1YzE1ZjkwYmFhMDY3OWFkOGQ1N2Q1ODE0MTRiNWVmMmY1Mzc3OCIsImtleSI6ImVhNDVYWU1CNlE1elk4U2N6b3pDOjBkRjJRdEJLUTU2MGJMX2Y4a09FSUEifQ==
# 
ELASTIC_PASSWORD = "FGs2odBSOX*T2gS8sl55"
CERT_FINGERPRINT = "4973741232cbcdb5af1c95c33a5c15f90baa0679ad8d57d581414b5ef2f53778"
es = Elasticsearch('https://localhost:9200',ca_certs="http_ca.crt", basic_auth=("elastic", ELASTIC_PASSWORD))
doc = {
    'author': 'author_name',
    'text': 'Interensting content...',
    'timestamp': datetime.now(),
}
resp = es.index(index="test-index", id=1, document=doc)
print(resp['result'])
es.info()