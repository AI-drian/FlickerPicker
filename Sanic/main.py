from sanic import Sanic, response as res
from sanic.response import json
from Collaborative_filtering import collaborative_filter
from Content_filtering import content_filter
import json


app = Sanic("__name__")


########### TEST ###########
@app.route("/")
async def test(request):
    return json({"Hello" : "world"})

@app.route("/api/about")
def handle_request(request):
    return res.json({'message': 'Hello world!'})


########### FIX THIS ###########

@app.get('/discover')
async def collaborative_engine(request):

    recommendations = collaborative_filter("The Matrix")

    return (recommendations)


@app.get('/filterbubble')
async def content_engine(request):

    recommendations = content_filter("The Matrix")

    return (recommendations)


# start the server
if __name__ == '__main__':
   app.run(port=5000, debug=True) # The 'debug=True' parameter auto-reloads server when code is changed!