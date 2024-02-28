import { useState } from 'react';
import { Link } from "react-router-dom";

export function LogoutUser({ onLogout }) {
    const [mensaje, setMensaje] = useState(null);

    function cerrarSesion() {
        localStorage.removeItem('usuario');
        localStorage.removeItem('administrador');

        onLogout();
        setMensaje("Sesión cerrada con éxito");
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <div className="container mt-5">
                    <h1 className="text-center">Cerrar Sesión</h1>
                </div>

                {mensaje && (
                    <span className="alert alert-primary mt-3" role="alert">{mensaje}</span>
                )}

                <div className='mt-2 w-50 d-flex align-items-center justify-content-evenly'>
                    <Link to="/logout" className="btnEnviar w-25 bg-success rounded-3 p-4 text-white text-center" onClick={cerrarSesion}>Si</Link>
                    <Link to="/" className="btnEnviar w-25 bg-danger rounded-3 p-4 text-white text-center">No</Link>
                </div>
            </div>
        </>
    );
}