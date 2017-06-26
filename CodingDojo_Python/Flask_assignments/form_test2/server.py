from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users/<name>', methods=['POST'])
def create_users(name):
    print "Got Post Info"
    print name

    name = request.form['name']
    email = request.form['email']
    print request.form

    return render_template('success.html', phrase = "hello", times = 5)

# @app.route('/users/<name>')
# def show_user_profile(name):
#     print name
#     return render_template('index.html')
app.run(debug=True)
