from sanic import Sanic, response as res, utils
from sanic.response import HTTPResponse
from Collaborative_filtering import collaborative_filter
from Content_filtering import content_filter


app = Sanic("__name__")


########### FIX THIS ###########

@app.get('/discover')
async def collaborative_engine(request):
    recommendations = collaborative_filter("Ringu") #Change this to the searchquery
    return res.json(recommendations)


@app.get('/filterbubble')
async def content_engine(request):
    recommendations = content_filter("The Matrix") #Change this to the searchquery
    return res.json(recommendations)


# start the server
if __name__ == '__main__':
   app.run(port=5000, debug=True) # The 'debug=True' parameter auto-reloads server when code is changed!