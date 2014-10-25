# -*- coding: utf-8 -*-
from flask import Flask, render_template
import gdata.analytics.client
import os
import pandas as pd
# import scipy.stats


#-*- coding:utf-8 -*-

import sys

# import the Auth Helper class
import hello_analytics_api_v3_auth

from apiclient.errors import HttpError
from oauth2client.client import AccessTokenRefreshError


#######################
#### configuration ####
#######################

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    service = hello_analytics_api_v3_auth.initialize_service()
    profile_id = get_first_profile_id(service)
    return profile_id

if __name__ == '__main__':
    app.run(debug=True)
