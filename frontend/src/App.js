import React, { useState } from 'react';
import './App.css';
import Headers from './components/Headers';
import Footer from './components/Footer';
import Login from './components/Login';
import Main from './components/Main';

export default function App() {
    const [usuario, setUsuario] = useState(null);
    const [vista, setVista] = useState('bienvenida');
    const [usuariosDB, setUsuariosDB] = useState([
        { usuario: "admin", password: "123" }
    ]);

    return (
        <div className="app-container">
            {!usuario ? (
                <Login 
                    onLogin={(nombre) => setUsuario(nombre)} 
                    usuariosDB={usuariosDB} 
                    setUsuariosDB={setUsuariosDB} 
                />
            ) : (
                <>
                    <Headers 
                        usuario={usuario} 
                        setVista={setVista} 
                        onLogout={() => setUsuario(null)} 
                    />
                    <Main vista={vista} />
                    <Footer />
                </>
            )}
        </div>
    );
}