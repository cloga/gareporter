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

stop_words = u'''#、#\n、1、2、3、4、5、6、7、8、9、0、啊、阿、哎、哎呀、哎哟、的、
            吗、唉、俺、俺们、按、按照、吧、吧哒、把、罢了、被、本、本着、比、比方、比如、
            鄙人、彼、彼此、边、别、别的、别说、并、并且、不比、不成、不单、不但、不独、
            不管、不光、不过、不仅、不拘、不论、不怕、不然、不如、不特、不惟、不问、不只、
            朝、朝着、趁、趁着、乘、冲、除、除此之外、除非、除了、此、此间、此外、从、从而、
            打、待、但、但是、当、当着、到、得、的、的话、等、等等、地、第、叮咚、对、对于、
            多、多少、而、而况、而且、而是、而外、而言、而已、尔后、反过来、反过来说、反之、
            非但、非徒、否则、嘎、嘎登、该、赶、个、各、各个、各位、各种、各自、给、根据、
            跟、故、故此、固然、关于、管、归、果然、果真、过、哈、哈哈、呵、和、何、何处、
            何况、何时、嘿、哼、哼唷、呼哧、乎、哗、还是、还有、换句话说、换言之、或、或是、
            或者、极了、及、及其、及至、即、即便、即或、即令、即若、即使、几、几时、己、既、
            既然、既是、继而、加之、假如、假若、假使、鉴于、将、较、较之、叫、接着、结果、借、
            紧接着、进而、尽、尽管、经、经过、就、就是、就是说、据、具体地说、具体说来、开始、
            开外、靠、咳、可、可见、可是、可以、况且、啦、来、来着、离、例如、哩、连、连同、
            两者、了、临、另、另外、另一方面、论、嘛、吗、慢说、漫说、冒、么、每、每当、们、
            莫若、某、某个、某些、拿、哪、哪边、哪儿、哪个、哪里、哪年、哪怕、哪天、哪些、
            哪样、那、那边、那儿、那个、那会儿、那里、那么、那么些、那么样、那时、那些、那样、
            乃、乃至、呢、能、你、你们、您、宁、宁可、宁肯、宁愿、哦、呕、啪达、旁人、呸、凭、
            凭借、其、其次、其二、其他、其它、其一、其余、其中、起、起见、起见、岂但、恰恰相反、
            前后、前者、且、然而、然后、然则、让、人家、任、任何、任凭、如、如此、如果、如何、
            如其、如若、如上所述、若、若非、若是、啥、上下、尚且、设若、设使、甚而、甚么、甚至、
            省得、时候、什么、什么样、使得、是、是的、首先、谁、谁知、顺、顺着、似的、虽、虽然、
            虽说、虽则、随、随着、所、所以、他、他们、他人、它、它们、她、她们、倘、倘或、倘然、
            倘若、倘使、腾、替、通过、同、同时、哇、万一、往、望、为、为何、为了、为什么、为着、
            喂、嗡嗡、我、我们、呜、呜呼、乌乎、无论、无宁、毋宁、嘻、吓、相对而言、像、向、
            向着、嘘、呀、焉、沿、沿着、要、要不、要不然、要不是、要么、要是、也、也罢、也好、
            一、一般、一旦、一方面、一来、一切、一样、一则、依、依照、矣、以、以便、以及、以免、
            以至、以至于、以致、抑或、因、因此、因而、因为、哟、用、由、由此可见、由于、有、
            有的、有关、有些、又、于、于是、于是乎、与、与此同时、与否、与其、越是、云云、哉、
            再说、再者、在、在下、咱、咱们、则、怎、怎么、怎么办、怎么样、怎样、咋、照、照着、
            者、这、这边、这儿、这个、这会儿、这就是说、这里、这么、这么点儿、这么些、这么样、
            这时、这些、这样、正如、吱、之、之类、之所以、之一、只是、只限、只要、只有、至、
            至于、诸位、着、着呢、自、自从、自个儿、自各儿、自己、自家、自身、综上所述、
            总的来看、总的来说、总的说来、总而言之、总之、纵、纵令、纵然、纵使、遵照、作为、
            兮、呃、呗、咚、咦、喏、啐、喔唷、嗬、嗯、嗳、\n、\n\n'''.split(u'、')

stops = [
    'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you',  'your',
    'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she',
    'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their',
    'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that',
    'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had',  'having', 'do', 'does', 'did', 'doing', 'a', 'an',
    'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of',
    'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through',
    'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down',
    'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then',
    'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any',
    'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
    'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can',
    'will', 'just', 'don', 'should', 'now', 'id', 'var', 'function', 'js', 'd',
    'script', '\'script', 'fjs', 'document'
]

stop_words = stop_words + stops
# 
def get_term_list(text):
    '''增加了对URL，书目，微博表情的抽取
    text需为unicode编码
    '''
    text = text.lower()
    if type(text) in [float, int]:
        text = str(text).decode('utf-8')  # 如果分数字会有问题
    # text = ' '.join(texts)
    url = re.compile(ur'http://[^\s]+')
    name = re.compile(ur'@[^\s!！"“”\'‘’()*+,.，。;《》\？@【】\|~：）]+')
    # topic = re.compile(ur'#[^#]+?#')
    book1 = re.compile(ur'《.*?》')
    book2 = re.compile(ur'<.*?>')
    book3 = re.compile(ur'【.*?】')
    mood = re.compile(ur'\[.*?\]')
    app = re.compile(ur'[（(][分享自|来自] @.*?[）)]')
    urls = re.findall(url, text)
    # text = text.replace('.', '')
    apps = re.findall(app, text)
    names = re.findall(name, text)
    names = [n[:-1] for n in names if n[-1] == ':']  # 去掉名字后匹配出来的:
    # topics = re.findall(topic, text)
    books = re.findall(book1, text) + re.findall(
        book2, text) + re.findall(book3, text)
    moods = re.findall(mood, text)
    text = re.sub(url, '', text)
    ##    text = re.sub(app, '', text)
    text = re.sub(name, '', text)
    #    text = re.sub(topic, '', text)
    ##    text = re.sub(book1, '', text)
    ##    text = re.sub(book2, '', text)
    ##    text = re.sub(book3, '', text)
    text = re.sub(mood, '', text)
    terms = [i.strip()
             for i in list(jieba.cut(text)) + urls + names + books + moods + apps if i not in stop_words and len(i) > 1]
    return terms

def generate_content_term_cloud(contents, top_n=100):
    # print contents
    terms = get_term_list(contents)
    c = collections.Counter(terms)
    topX = c.most_common()
    topX = topX[:top_n]
    # print topX
    max_c = topX[0][1]
    min_c = topX[-1][1]
    max_size = 200
    # 最大的频率大于200则按照频率做一个线性变化计算kws大小
    topX = [(i[0], (lambda x: max_size - 1.00 * (max_c - x) * (1.00 * (max_size - 1) / (max_c - min_c)))(i[1]))
                for i in topX]
    # topX = [(i[0],(lambda x: max_size-1.00*(max_c-math.log(x))*(1.00*(max_size-1)/(max_c-min_c)))(i[1])) for i in topX]
    # print topX
    t_f = ''
    for i in topX:
        t_f += '[\'' + i[0] + '\',' + str(i[1]) + '],'
    return t_f

@app.route('/', methods=['GET', 'POST'])
def index():
    errors = []
    results = {}
    if request.method == "POST":
        # get url that the person has entered
        try:
            url = request.form['url']
            if 'http://' not in url[:7]:
                url = 'http://' + url
            r = requests.get(url)
            # print r.content
        except:
            errors.append(
                "Unable to get URL. Please make sure it's valid and try again."
            )
            return render_template('index.html', errors=errors)
        if r:
            content = r.content
            soup = BeautifulSoup(content)
            # print soup.title
            title = soup.title.text if soup.title else ''
            # print soup.get_text()
            terms = generate_content_term_cloud(soup.get_text())
            # save the results
            # print terms
            results = {'url': url, 'title': title, 'terms': terms}
    return render_template('index.html', errors=errors, results=results)


@app.route('/ca', methods=['GET', 'POST'])
def corr_analysis():
    errors = []
    results = {}
    if request.method == "POST":
        # get url that the person has entered
        if request.form:
            try:
                url = request.form['url'] if request.form['url'] else request.files['file']
                df = pd.read_csv(url, encoding='utf-8')
            except:
                errors.append(
                    "Unable to get URL. Please make sure it's valid and try again."
                )
                return render_template('ca.html', errors=errors)
        else:
            try:
                file_rand = int(random.random()*100000)
                file_name = 'static/files/' + str(file_rand) + '.csv'
                request.files['file'].save(file_name)
                df = pd.read_csv(file_name, encoding='utf-8')
            except:
                errors.append(
                    "Unable to parse file. Please make sure it's valid and try again."
                )
                return render_template('ca.html', errors=errors)
        if len(df):
            df = df.set_index(df.columns[0])
            ca = CA(df)
            graph_rand = int(random.random()*100000)
            # p_value = scipy.stats.chi2_contingency(df.as_matrix())[1]
            eigenvalue_rand = int(random.random()*100000)
            plt.figure(graph_rand)
            ca.plot()
            graph_path = 'static/pics/' + str(graph_rand) + '.png'
            plt.savefig(graph_path)
            plt.figure(eigenvalue_rand)
            eigenvalue_path = 'static/pics/' + str(eigenvalue_rand) + '.png'
            ca.scree_diagram()
            plt.savefig(eigenvalue_path)
            # results = {'html': df.to_html(), 'graph_path': graph_path_rand, 'eigenvalue_path': eigenvalue_path_rand, 'p_value': p_value}# 不支持scipy
            results = {'html': df.to_html(), 'graph_path': graph_path, 'eigenvalue_path': eigenvalue_path}
    return render_template('ca.html', errors=errors, results=results)

if __name__ == '__main__':
    app.run(debug=True)
