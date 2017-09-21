from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    print '=' * 10
    print request.form
    print '=' * 10
    return render_template('process.html', names = request.form)

app.run(debug=True)


# "/": renders a landing page with a form.

# "/process": the route your form should submit to. In your process function, print the user's name and redirect to root.
