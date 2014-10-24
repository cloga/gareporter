# -*- coding: utf-8 -*-
from flask import Flask, render_template
import gdata.analytics.client

import os
import requests
import re
import jieba
import collections
from ca import CA
import pandas as pd
import matplotlib.pyplot as plt
import random
import tempfile
# import scipy.stats


#-*- coding:utf-8 -*-



EMAIL = 'cloga0216@gmail.com'
PWD = 'dragon83'
SOURCE_APP_NAME = 'Cloga_GA'

my_client = gdata.analytics.client.AnalyticsClient(source=SOURCE_APP_NAME)

auth_token = my_client.client_login(
    EMAIL,
    PWD,
    source=SOURCE_APP_NAME,
    service=my_client.auth_service,
    account_type='GOOGLE'
)

token = my_client.auth_token

data_query = gdata.analytics.client.DataFeedQuery({
    'ids': 'ga:36050032',
    'dimensions': 'ga:source',
    'metrics': 'ga:pageviews',
    'start-date': '2013-05-18',
    'end-date': '2014-10-10',
    'prettyprint': 'true'
})
feed = my_client.GetDataFeed(data_query)

results = []

for entry in feed.entry:
    result = {}
    for dim in entry.dimension:
        result[dim.name] = dim.value
    for met in entry.metric:
        result[met.name] = met.value
    results.append(result)
pd.DataFrame(results)

# print result
for i in result:
    print '浏览量:' + i[1]


#######################
#### configuration ####
#######################

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(debug=True)
