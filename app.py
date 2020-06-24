from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy

notepad = Flask(__name__)
notepad('SQLALCHEMY_DATABASE_URI') = 'sqlite:///notepad.sqlite'
db = SQLAlchemy(notepad)

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String)


@notepad.route('/')
def index():
    return render_template('index.html', name='Isabel')

if __name__ == '__main__':
    notepad.run(debug=True)