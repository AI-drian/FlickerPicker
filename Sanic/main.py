from sanic import Sanic, response as res

# instantiate the app object
app = Sanic("__name__")

# start the server
if __name__ == '__main__':
   app.run(port=8000, debug=True) # The 'debug=True' parameter auto-reloads server when code is changed!