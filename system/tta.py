from TikTokApi import TikTokApi
from theapi import TheTikTokAPI
from flask import Flask
import json
from flask_cors import CORS
import requests
from flask import  request
from flask_socketio import SocketIO



app = Flask(__name__)

CORS(app)


@app.route('/')
def hello_world():
  
    api = TikTokApi(region="CA", language="en",  proxy="167.86.98.179:8080")

    trendingChallenges = api.discoverHashtags()
  

    #print(trendingChallenges)

    return {"Data":trendingChallenges}
    

@app.route('/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files['file']
    if uploaded_file.filename != '':
        uploaded_file.save('./uploads/'+uploaded_file.filename)
    return "GOOD"


@app.route('/fff')
def fff():
  
    api = TikTokApi()

    trendingChallenges = api.getHashtagDetails("bitcoin") 
    #discoverHashtags()
  

    #print(trendingChallenges)

    return {"Data":trendingChallenges}
    



@app.route('/topusers')
def topusers():
    api = TheTikTokAPI(region="CA",timezone="America/St_Johns",language="en")

    results = 10
   
    trending = api.getTrending(count=results)
    return {'Data':trending}



@app.route('/searchvideos/<kw>')
def searchvideos(kw):
    api = TikTokApi()
    
    trending = api.search_for_hashtags(kw)
    
    return {'Data':trending}

  

@app.route('/getvideo/<music_id>')
def getVideosByMusic(music_id):
    api = TheTikTokAPI(timezone="Europe/Amsterdam",region="Netherlands")
    
    return api.getVideoById(music_id)    


@app.route('/getvideosbyuser/<userid>')
def getVideosByUser(userid):
    api = TheTikTokAPI(timezone="Europe/Amsterdam",region="Netherlands")

    return api.getVideosByUserName(userid)




@app.route('/searchhashtags/<kw>')
def searchHashtags(kw):
    #api = TikTokApi( region="CA")

    #trending = api.search_for_hashtags(kw, count=30)
    api = TikTokApi()

    trending = api.getHashtagDetails(kw)

    #discoverHashtags()
    fff = requests.get("http://localhost/tiktok/system/ttkphp?a=sh&id="+trending["challengeInfo"]["challenge"]["id"])
    
    return {'Data1':fff.text}



@app.route('/searchusers/<un>')
def searchUsers(un):
    api = TikTokApi( region="NL")   
    results = 10

    trending = api.search_for_users(un, count=30)

    return {'Data':trending}


@app.route('/getuser/<un>')
def getuser(un):
    api = TikTokApi()   
    results = 10

    trending = api.getUser(un)

    return {'Data':trending}





if __name__ == '__main__':
    app.run()
