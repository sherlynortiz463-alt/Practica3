from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app) 

def conectar_bd():
    return mysql.connector.connect(
        host="localhost",
        user="cecy",  
        password="4321",  
        database="cecy" 
    )

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user_input = data.get('username')
    pass_input = data.get('password')
    
    try:
        conexion = conectar_bd()
        cursor = conexion.cursor(dictionary=True)
        
        query = "SELECT password FROM usuarios WHERE username = %s"
        cursor.execute(query, (user_input,))
        usuario = cursor.fetchone()
        
        cursor.close()
        conexion.close()
        
        if usuario and usuario['password'] == pass_input:
            return jsonify({"message": "Login exitoso"}), 200
        else:
            return jsonify({"error": "Usuario o contraseña incorrectos"}), 401
            
    except mysql.connector.Error as err:
        return jsonify({"error": f"Error de BD: {err}"}), 500

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    user_input = data.get('username')
    pass_input = data.get('password')
    email_input = data.get('email')
    
    try:
        conexion = conectar_bd()
        cursor = conexion.cursor()
        
        query = "INSERT INTO usuarios (username, password, email) VALUES (%s, %s, %s)"
        cursor.execute(query, (user_input, pass_input, email_input))
        conexion.commit()
        
        cursor.close()
        conexion.close()
        return jsonify({"message": "Usuario registrado exitosamente"}), 201
    except mysql.connector.Error as err:
        return jsonify({"error": "El nombre de usuario o email ya existe"}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
