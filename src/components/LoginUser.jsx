import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

export function LoginUser({ onLogin }) {
    const [mensaje, setMensaje] = useState(null);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();

    async function onSubmit(data) {
        console.log(data);

        try {
            const response = await fetch('http://127.0.0.1:8000/usuarios/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Respuesta del servidor:', responseData['message']);
                setMensaje(responseData['message']);

                onLogin(responseData['usuario']);
                localStorage.setItem('usuario',responseData['usuario']);
                localStorage.setItem('administrador',responseData['administrador']);
                location.pathname = "/vehiculos";
            }
        } catch (error) {
            setMensaje(error);
            console.error('Error en la solicitud: ', error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Login</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="formHook pt-3 d-flex flex-column justify-content-center" action="" method="post">
                {mensaje && (
                    <span className="alert alert-primary" role="alert">{mensaje}</span>
                )}
                    
                {errors.dni && <span className="alert alert-warning" role="alert">Debes rellenar el dni</span>}
                {errors.password && <span className="alert alert-warning" role="alert">Debes introducir una contraseña de mas de 6 carácteres</span>}
                
                <div className="align-self-center">
                    <div className="d-flex">
                        <div className="form-floating">
                            <input type="text" className="form-control" name="dni" id="dni" placeholder="DNI" {...register('dni', {required: true})} />
                            <label htmlFor="dni">DNI</label>
                        </div>
                        
                        <div className="form-floating">
                            <input type="password" className="form-control" name="password" id="password" placeholder="contraseña" {...register('password', {required: true, minLength:6})} />
                            <label htmlFor="password">Contraseña</label>
                        </div>
                    </div>
                </div>

                <div className="align-self-center d-flex">
                    <div className="align-self-center mt-3">
                        <input type="submit" value="Iniciar Sesión" id="submit" className="btnEnviar bg-dark rounded-3 p-2" />
                    </div>
                    <li className="ms-5 fs-5 d-flex align-items-end">
                        <Link className="link text-primary" to="/register">No tienes cuenta? Registrate</Link>
                    </li>
                </div>
            </form>
        </>
    );
}

