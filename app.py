from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/2015')
def data2015():
    return render_template('2015.html')

@app.route('/2016')
def data2016():
    return render_template('2016.html')

@app.route('/2017')
def data2017():
    return render_template('2017.html')

@app.route('/2018')
def data2018():
    return render_template('2018.html')

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/map2015')
def map2015():
    return render_template('map2015.html')

@app.route('/map2016')
def map2016():
    return render_template('map2016.html')

@app.route('/map2017')
def map2017():
    return render_template('map2017.html')
 
@app.route('/map2018')
def map2018():
    return render_template('map2018.html')

@app.route('/graphs')
def graphs():
    return render_template('graphs.html')

@app.route('/about')
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug = True)