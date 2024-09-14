from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To pozwoli na żądania z różnych domen

@app.route('/')
def hello():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True)