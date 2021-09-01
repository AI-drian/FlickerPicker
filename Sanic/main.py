from sanic import Sanic, response as res
from Collaborative_filtering import collaborative_filter
from Content_filtering import content_filter


app = Sanic("__name__")


########### FIX THIS ###########

@app.get("/discover/<movieTitle>")
async def collaborative_engine(request, movieTitle):
    recommendations = collaborative_filter(movieTitle)
    return res.json(recommendations)


@app.get("/filterbubble/<movieTitle>")
async def content_engine(request, movieTitle):
    recommendations = content_filter(movieTitle)
    return res.json(recommendations)


# start the server
if __name__ == '__main__':
   app.run(port=5000, debug=True) # The 'debug=True' parameter auto-reloads server when code is changed!