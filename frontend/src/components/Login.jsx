import React, { useState } from 'react';

const USUARIOS_LOCALES = [
    { username: 'cecy', password: '4321' },
    { username: 'sher', password: '4321' }
];

export default function Login({ onLogin }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [exito, setExito] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setExito('');

        if (!usuario || !password) {
            setError('Por favor, rellene todos los campos.');
            return;
        }

        if (isRegistering) {
            const existe = USUARIOS_LOCALES.find(u => u.username === usuario);
            if (existe) {
                setError('El usuario ya existe.');
            } else {
                USUARIOS_LOCALES.push({ username: usuario, password: password });
                setExito('¡Usuario registrado con éxito! Ya puedes ingresar.');
                setUsuario('');
                setPassword('');
                setIsRegistering(false);
            }
        } else {
            const userFound = USUARIOS_LOCALES.find(u => u.username === usuario && u.password === password);
            if (userFound) {
                onLogin(usuario); 
            } else {
                setError('La contraseña o usuario no coincide con nuestros registros.');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isRegistering ? 'Crear Usuario' : 'Inicia Sesión'}</h2>

                {error && <div className="error-msg">{error}</div>}
                {exito && <div className="success-msg">{exito}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Usuario:</label>
                        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Contraseña:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn">{isRegistering ? 'Registrar' : 'Ingresar'}</button>
                </form>

                <button type="button" className="btn btn-secondary" onClick={() => { setIsRegistering(!isRegistering); setError(''); setExito(''); }}>
                    {isRegistering ? 'Volver al Login' : 'Usuario Nuevo'}
                </button>
            </div>
        </div>
    );
}
