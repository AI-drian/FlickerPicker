from sanic import Sanic, response as res
from sanic.response import json

#Source of info    https://scoutapm.com/blog/go-fast-getting-started-with-sanic-for-python

app = Sanic("__name__")

@app.route("/api/test")
async def test(request):
    return json({"Hello" : "World"})

@app.route("/api/form")
async def form(request):
    print(request.args)
    return res.text("Reading Request")

@app.route('/api/json')
def handle_request(request):
    return res.json({'message': 'Hello world!'})

# start the server
if __name__ == '__main__':
   app.run(port=5000, debug=True) # The 'debug=True' parameter auto-reloads server when code is changed!