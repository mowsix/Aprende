from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Para permitir solicitudes desde el frontend

@app.route('/api/clases', methods=['POST'])
def create_class():
    data = request.json
    # Procesa los datos aquí (guárdalos en la base de datos, etc.)
    return jsonify({"message": "Clase creada con éxito", "data": data})

if __name__ == '__main__':
    app.run(debug=True)

