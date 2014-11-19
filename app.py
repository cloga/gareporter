# -*- coding: utf-8 -*-
from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
from flask import session
from flask import url_for
import os
import collections
import urllib
import urllib2
import httplib2
import json
import pandas as pd
import sys
import tempfile

##Google Oauth
# 需增加token持久化及刷新的机制
# 需增加出现抽样后，将粒度变小的逻辑

client_id = '239823730922-72pfrs8hjs640ptrb1kecinogffhhdh9.apps.googleusercontent.com'  # 请替换为你的Client_id
client_secret = '1fhPtLWXGjp9qgzAib28SThi'  # 请替换为你的Client_secret
redirect_uri = 'http://gareport.cloga.info/oauth2callback'
# redirect_uri = 'http://127.0.0.1:5000/oauth2callback'
auth_server = 'https://accounts.google.com/o/oauth2/auth'
token_uri = 'https://accounts.google.com/o/oauth2/token'
scope = 'https://www.googleapis.com/auth/analytics.readonly'
data_uri = 'https://www.googleapis.com/analytics/v3/data/ga'
mcf_uri = 'https://www.googleapis.com/analytics/v3/data/mcf'
# meta_data = 'https://www.googleapis.com/analytics/v3/metadata/ga/columns?pp=1'
# meta_data = json.loads(urllib2.urlopen(meta_data).read())

# proxy = urllib2.ProxyHandler({'http': 'http://127.0.0.1:8087'})
# opener = urllib2.build_opener(proxy)
# urllib2.install_opener(opener)
# url = 'https://www.googleapis.com/analytics/v3/data/ga?access_token=ya29.wwBLMeIS6Nymos_go3qZJi0CECKsuVZTcQCRXFDVj4G1S4zq0OdRPdWiLV7ftOIotk51-j77af0-zg&ids=ga:36050032&start-date=2014-01-01&end-date=2014-11-01&metrics=ga:pageviews,ga:sessions&dimensions=ga:source,ga:medium&max-results=10000'
# urllib2.urlopen(url).read()
# print urllib2.urlopen('http://www.youtube.com').read()


dtype_mapping = {u'CURRENCY':'object', u'FLOAT' : float, u'INTEGER' : int, u'PERCENT' : float, u'STRING' : str, u'TIME': 'object'} 

# proxy = httplib2.ProxyInfo(3, '127.0.0.1', 8087)
# http = httplib2.Http(
    # proxy_info=proxy, disable_ssl_certificate_validation=True)

http = httplib2.Http(disable_ssl_certificate_validation=True)

# url = 'https://www.googleapis.com/analytics/v3/data/ga?access_token=ya29.wwAl_oJqu37-d_ytQcGj-RtgANH1DAKshqai-bGFyTXlt8JrvJGZnjl-P2FXxFzF3_Z8eRoJtVkB9A&ids=ga:36050032&start-date=2014-01-01&end-date=2014-11-01&metrics=ga:pageviews,ga:sessions&dimensions=ga:source,ga:medium&max-results=10000'
def get_data(args):
    return args
    url = data_uri + '?' + args
    print u'解析数据,打开:\n' + url
    return url
    # return urllib2.urlopen(url).read()
    content = json.loads(urllib2.urlopen(url).read())
    columns = [i['name'] for i in content['columnHeaders']]
    dtypes = {i['name']:dtype_mapping.get(i['dataType'], None) for i in content['columnHeaders']}
    pages = content['totalResults'] / 10000.0 + 1
    rows = content['rows']
    if pages > 2:
        for i in range(2, pages):
                url0 = url + '&start-index=' + str(i * 10000)
                print '解析数据,打开:\n' + url0
                content0 = json.loads(urllib2.urlopen(url0).read())
                rows += content0['rows']
    df = pd.DataFrame(rows, columns=columns)
    for c in df.columns:
        df[c] = df[c].astype(dtypes[c])
    return df


def get_mcf_data(args):
    url = mcf_uri + '?' + args
    print '解析数据,打开:\n' + url
    content = json.loads(urllib2.urlopen(url).read())
    headers = [i['name'] for i in content['columnHeaders']]
    rows = content['rows']
    if content['totalResults'] <= 10000:
        return headers, rows
    else:
        for i in range(2, content['totalResults'] / 10000 + 1):
            url0 = url + '&start-index=' + str(i * 10000)
            print '解析数据,打开:\n' + url0
            content0 = json.loads(urllib2.urlopen(url0).read())
            print len(rows)
            rows += content0['rows']
        return headers, rows


def write_data(headers, rows, name='ga_data'):
    content = ','.join(headers).encode(
        'gbk', 'ignore') + '\n' + '\n'.join(rows)
    with open('./' + name + '.csv', 'w') as f:
        f.write(content)
    print "Data has been writen!"


def agg_dic(dic, key, value):  # 给定channel名，算channel的值
    if dic.has_key(key):
        ##已有channel
        dic[key] = [float(dic[key][0]) + float(
            value[0]), float(dic[key][1]) + float(value[1])]
    else:
        dic[key] = value  # 新channel


def output_dic(file, dic):
    for k in dic.keys():
# print k,dic[k][0],dic[k][1]
        file.write('%s,%s,%s\n' % (k, dic[k][0], dic[k][1]))
    file.write('\n\n\n')


def write_funnel_data(headers, rows, name='funnel_data'):
    funnels_list = []
    for i in rows:
        funnels_list += [str(j['nodeValue'])
                         for j in i[0]['conversionPathValue']]
    covs = [str(i[1]['primitiveValue']) for i in rows]
    vals = [str(i[2]['primitiveValue']) for i in rows]
    lines = [funnels_list[n] + ',' + covs[n] + ',' + vals[n]
             for n in range(len(funnels_list))]
    content = ','.join(headers).encode(
        'gbk', 'ignore') + '\n' + '\n'.join(lines)
    with open('./' + name + '.csv', 'w') as f:
        f.write(content)
    print "Funnel Data has been writen!"


def write_mcf_data(headers, rows, name='mcf_data'):
    dic_f = {}  # first touch
    dic_l = {}  # last touch
    dic_ln = {}  # linear
    funnels_list = []
    for i in rows:
        paths = [str(j['nodeValue']) for j in i[0]['conversionPathValue']]
        covs = i[1]['primitiveValue']
        vals = i[2]['primitiveValue']
        if len(paths) == 1:
            channel = paths
            cov = [covs, vals]
            agg_dic(dic_f, channel[0], cov)
            agg_dic(dic_l, channel[0], cov)
            agg_dic(dic_ln, channel[0], cov)
        else:
            # first touch
            channel = paths[0]
            cov = [covs, vals]
            agg_dic(dic_f, channel, cov)
            # last touch
            channel = paths[-1]
            agg_dic(dic_l, channel, cov)
            # linear
            channels_list = collections.Counter(paths).most_common()
            for c in channels_list:
                weight = c[1] / len(paths)
                cov = [float(covs) * weight, float(vals) * weight]
                agg_dic(dic_ln, c[0], cov)
    with open(name + '.csv', 'w') as f:
        f.write('-----first touch------\n')
        f.write('channel,conversions,value\n')
        output_dic(f, dic_f)
        f.write('-----last touch------\n')
        f.write('channel,conversions,value\n')
        output_dic(f, dic_l)
        f.write('-----linear------\n')
        f.write('channel,conversions,value\n')
        output_dic(f, dic_ln)
        print "MCF Data has been writen!"

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

@app.route('/query', methods=['GET', 'POST'])
def query():
    file_path = 'static/files/'
    errors = []
    results = {}
    results['token'] = session['ga_token']
    # results['token'] = 'ya29.wQBVF5t-NeQz1Em9w9SiWeb-HK6soxRewQdr0dUh-nOrwcveYkFNxvCLTQJ3jsps5x8kOSbdpmH15A'
    if request.method == "POST":
        access_token = session['ga_token']
        # access_token = ' ya29.wQAk9XheM6W_28ODMFFh9_yyMMkY4G6eI4d0Vx7kHbXABWdbTNxaDKHkeJxPdP2cuXerwQxmsf_dqw'
        profile_id = 'ga:' + request.form['view_id']
        start = request.form['start']
        end = request.form['end']
        metrics = request.form['metrics']
        dimensions = request.form['dimensions']
        # filters = request.form['filters']
        # profile_id = 'ga:XXXX'  # 要查询数据的Profile_id
        args = 'access_token=' + str(access_token) +\
            '&ids=' + str(profile_id) +\
            '&start-date=' + str(start) +\
            '&end-date=' + str(end) +\
            '&metrics=' + str(metrics) +\
            '&dimensions=' + str(dimensions) +\
            '&max-results=' + '10000'   
        # return 'ok'
        df =  get_data(args)
        return df
        xlsx_file = tempfile.NamedTemporaryFile(dir=file_path, mode='w+b', suffix='.xlsx', delete=False)
        # df.to_excel('static/files/xlsx_file.xlsx', index=False)
        df.to_excel(xlsx_file.name, index=False)
        results['file_path'] = file_path
        results['xlsx_file'] = os.path.split(xlsx_file.name)[1]
        return render_template('report.html', errors=errors, results=results)  
    return render_template('query.html', errors=errors, results=results)
#Session Secret Key
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

if __name__ == '__main__':
    app.run(debug=True)
