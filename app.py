# -*- coding: utf-8 -*-
from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import session
from flask import url_for
import os
import urllib
import urllib2
import httplib2
import json
import pandas as pd
import datetime

##Google Oauth
# 需增加token持久化及刷新的机制
# 需增加出现抽样后，将粒度变小的逻辑

client_id = '239823730922-72pfrs8hjs640ptrb1kecinogffhhdh9.apps.googleusercontent.com'  # 请替换为你的Client_id
client_secret = '1fhPtLWXGjp9qgzAib28SThi'  # 请替换为你的Client_secret
if os.environ.get('APP_SETTINGS', '') == 'config.ProductionConfig':
    redirect_uri = 'http://gareport.cloga.info/oauth2callback'
else:
    redirect_uri = 'http://127.0.0.1:5000/oauth2callback'
auth_server = 'https://accounts.google.com/o/oauth2/auth'
token_uri = 'https://accounts.google.com/o/oauth2/token'
scope = 'https://www.googleapis.com/auth/analytics.readonly'
data_uri = 'https://www.googleapis.com/analytics/v3/data/ga'
mcf_uri = 'https://www.googleapis.com/analytics/v3/data/mcf'
# meta_data = 'https://www.googleapis.com/analytics/v3/metadata/ga/columns?pp=1'
# meta_data = json.loads(urllib2.urlopen(meta_data).read())

dtype_mapping = {u'CURRENCY':'object', u'FLOAT' : float, u'INTEGER' : int, u'PERCENT' : float, u'STRING' : str, u'TIME': 'object'} 

http = httplib2.Http(disable_ssl_certificate_validation=True)

# url = 'https://www.googleapis.com/analytics/v3/data/ga?access_token=ya29.wwAl_oJqu37-d_ytQcGj-RtgANH1DAKshqai-bGFyTXlt8JrvJGZnjl-P2FXxFzF3_Z8eRoJtVkB9A&ids=ga:36050032&start-date=2014-01-01&end-date=2014-11-01&metrics=ga:pageviews,ga:sessions&dimensions=ga:source,ga:medium&max-results=10000'

#######################
#### configuration ####
#######################

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/oauth', methods=['GET', 'POST'])
def get_oauth():
    auth_uri = auth_server + '?scope=' + scope + '&state=/profile&redirect_uri=' + redirect_uri + \
        '&response_type=code&client_id=' + client_id
    return redirect(auth_uri)

@app.route('/oauth2callback', methods=['GET', 'POST'])
def get_token():
    ##like 4/JPxXb-9pIYgDplpl219vZsrsnosh.EkSM4OsIb8MdgrKXntQAax3otm0OegI
    if request.args.get('error',''):
        return request.args.get('error','')
    body = urllib.urlencode({
        'grant_type': 'authorization_code',
        'client_id': client_id,
        'client_secret': client_secret,
        'code': request.args.get('code',''),
        'redirect_uri': redirect_uri,
        'scope': scope,
    })
    headers = {'content-type': 'application/x-www-form-urlencoded', }
    content = http.request(
        token_uri, method='POST', body=body, headers=headers)
    access_token = json.loads(content[1])['access_token']
    session['ga_token'] = access_token
    # refresh_token = json.loads(content[1])['refresh_token']
    ##access_token有效期为一小时，超时需使用refresh_token重新获得
    # print url_for('query')
    # return redirect('http://gareport.cloga.info/query')
    return redirect(url_for('query'))

def get_data(args):
    url = data_uri + '?' + args
    content = json.loads(urllib2.urlopen(url).read())
    columns = [i['name'] for i in content['columnHeaders']]
    dtypes = {i['name']:dtype_mapping.get(i['dataType'], None) for i in content['columnHeaders']}
    pages = content['totalResults'] / 10000 + 1 if content['totalResults'] / 10000 != content['totalResults'] / 10000.0 else content['totalResults'] / 10000
    rows = content.get('rows', [])
    if not rows:
        return pd.DataFrame()
    if pages >= 2:
        for i in range(2, pages):
                url0 = url + '&start-index=' + str(i * 10000) + str(1)
                content0 = json.loads(urllib2.urlopen(url0).read())
                rows += content0['rows']
    df = pd.DataFrame(rows, columns=columns)
    for c in df.columns:
        df[c] = df[c].astype(dtypes[c])
    return df

@app.route('/query', methods=['GET', 'POST'])
def query():
    file_path = 'static/files/'
    errors = []
    results = {}
    results['token'] = session['ga_token']
    if request.method == "POST":
        access_token = session['ga_token']
        profile_id = 'ga:' + request.form['view_id']
        start = request.form['start']
        end = request.form['end']
        metrics = request.form['metrics']
        dimensions = request.form['dimensions']
        # filters = request.form['filters']
        args = 'access_token=' + str(access_token) +\
            '&ids=' + str(profile_id) +\
            '&start-date=' + str(start) +\
            '&end-date=' + str(end) +\
            '&metrics=' + str(metrics) +\
            '&dimensions=' + str(dimensions) +\
            '&max-results=' + '10000'
        df = get_data(args)
        c_names = request.form.getlist('c_names')
        condition_include = request.form.getlist('condition_include')
        c_dimensions = request.form.getlist('c_dimensions')
        operators = request.form.getlist('operators')
        expressions = request.form.getlist('expressions')
        c_metrics = request.form.getlist('c_metrics')
        for i in range(len(c_names)):
            custom_metrics_name = c_names[0]
            c_args = 'access_token=' + str(access_token) +\
            '&ids=' + str(profile_id) +\
            '&start-date=' + str(start) +\
            '&end-date=' + str(end) +\
            '&metrics=' + str(c_metrics[i]) +\
            '&dimensions=' + str(dimensions) +\
            '&max-results=' + '10000' +\
            '&filters=' + str(c_dimensions[i]) + urllib.quote_plus(operators[i] + str(expressions[i]))
            df_c = get_data(c_args)
            if not len(df_c):
                df[c_names[0]] = 0
                continue
            df_c[custom_metrics_name] = df_c[c_metrics[i]]
            df_c.drop(c_metrics[i], inplace=True, axis=1)
            df = pd.merge(df, df_c, how='left', on=dimensions.split(','))
        xlsx_file = str(datetime.datetime.now()) + '.xlsx'
        df.to_excel(file_path + xlsx_file, index=False)
        results['file_path'] = file_path
        results['xlsx_file'] = xlsx_file
        return render_template('report.html', errors=errors, results=results)  
    return render_template('query.html', errors=errors, results=results)
#Session Secret Key
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

if __name__ == '__main__':
    app.run(debug=True)
