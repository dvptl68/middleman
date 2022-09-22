import pandas as pd
import sys
import names
import numpy as np
import json
import ast

class ProcessProfiles:
    # return all the hits with a source. 
    def get_source_list(dictList):
        newList = []
        for item in dictList:
            newList.append(item['_source'])
            
        return newList
    
    # implement later
    def modelToMatchTerms(dictList):
        return 1

# print("[\n    {\n        \"age\": 31,\n        \"sex\": \"m\",\n        \"orientation\": \"gay\",\n        \"education\": \"graduated from masters program\",\n        \"height\": 69.0,\n        \"income\": -1,\n        \"location\": \"san francisco, california\",\n        \"religion\": \"atheism\",\n        \"name\": \"Charlotte Wilkins\"\n    },\n    {\n        \"age\": 29,\n        \"sex\": \"m\",\n        \"orientation\": \"straight\",\n        \"education\": \"graduated from college/university\",\n        \"height\": 66.0,\n        \"income\": -1,\n        \"location\": \"san francisco, california\",\n        \"religion\": null,\n        \"name\": \"Jennifer Brittain\"\n    },\n    {\n        \"age\": 29,\n        \"sex\": \"m\",\n        \"orientation\": \"straight\",\n        \"education\": \"graduated from college/university\",\n        \"height\": 67.0,\n        \"income\": -1,\n        \"location\": \"san francisco, california\",\n        \"religion\": \"atheism\",\n        \"name\": \"Bradley Smith\"\n    },\n    {\n        \"age\": 30,\n        \"sex\": \"m\",\n        \"orientation\": \"straight\",\n        \"education\": \"graduated from college/university\",\n        \"height\": 69.0,\n        \"income\": -1,\n        \"location\": \"san francisco, california\",\n        \"religion\": \"agnosticism and somewhat serious about it\",\n        \"name\": \"Mark Bartley\"\n    },\n    {\n        \"age\": 32,\n        \"sex\": \"m\",\n        \"orientation\": \"straight\",\n        \"education\": \"graduated from college/university\",\n        \"height\": 68.0,\n        \"income\": -1,\n        \"location\": \"san francisco, california\",\n        \"religion\": \"agnosticism and laughing about it\",\n        \"name\": \"Jeff Gold\"\n    }\n]")
