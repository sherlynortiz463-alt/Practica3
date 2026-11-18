import React from 'react';

export default function Headers({ usuario, setVista, onLogout }) {
    return (
        <header>
            <div className="header-logo-title">
                <div className="header-text">
                    <span className="school-subtitle">Colegio de Estudios Científicos y Tecnológicos del Estado de México</span>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#menu">Menú Principal ▾</a>
                        <ul className="dropdown-menu">
                            <li><button onClick={() => setVista('bienvenida')}>Inicio</button></li>
                            <li><button onClick={() => setVista('cultivos')}>Cultivos</button></li>
                            <li><button onClick={() => setVista('bitacora')}>Bitacora</button></li>
                            <li><button onClick={() => setVista('calendario')}>Calendario</button></li>
                            <li><button onClick={() => setVista('contacto')}>Contacto</button></li>
                            <li><button onClick={() => setVista('gastos')}>Gastos</button></li>
                             <li><button onClick={() => setVista('tutoriales')}>Tutoriales</button></li>
                            <li><button onClick={() => setVista('beneficios')}>Beneficios Comunidad</button></li>
                        </ul>
                    </li>
                    {usuario && (
                        <li><button onClick={onLogout}>Cerrar Sesión ({usuario})</button></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}