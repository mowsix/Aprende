from flask import Flask, request, jsonify

app = Flask(__name__)

# Simulando una base de datos en memoria
clases = []

@app.route('/api/clases', methods=['POST'])
def create_class():
    data = request.json
    clases.append(data)
    return jsonify({"message": "Clase creada con éxito", "data": data})

@app.route('/api/clases', methods=['GET'])
def get_clases():
    return jsonify({"clases": clases})

if __name__ == '__main__':
    app.run(debug=True)
