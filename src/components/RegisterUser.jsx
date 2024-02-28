import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from "react-router-dom";

export function RegisterUser() {
    const [mensaje, setMensaje] = useState(null);
    const { register, formState: { errors }, handleSubmit } = useForm();

    async function onSubmit(data) {
        console.log(data);

        try {
            const response = await fetch('http://127.0.0.1:8000/usuarios/api/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Respuesta del servidor:', responseData);
                setMensaje(responseData);
            }
        } catch (error) {
            setMensaje(error);
            console.error('Error en la solicitud: ', error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Registro</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="formHook pt-3 d-flex flex-column justify-content-center" action="" method="post">
                {mensaje && (
                    <span className="alert alert-primary" role="alert">{mensaje}</span>
                )}
                    
                {errors.dni && <span className="alert alert-warning" role="alert">Debes rellenar el dni</span>}
                {errors.password && <span className="alert alert-warning" role="alert">Debes introducir una contraseña de mas de 6 carácteres</span>}
                {errors.username && <span className="alert alert-warning" role="alert">Debes Rellenar el username</span>}
                {errors.direccion && <span className="alert alert-warning" role="alert">Debes rellenar la dirección</span>}
                {errors.edad && <span className="alert alert-warning" role="alert">Debes ser mayor de edad</span>}
                
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

                        <div className="form-floating">
                            <input type="text" className="form-control" name="username" id="username" placeholder="name" {...register('username', {required: true})} />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="form-floating">
                            <select className="form-select" name="provincia" id="provincia" {...register('provincia', {required: true})} >
                                <option selected>Seleccionar</option>
                                <option value="Granada">Granada</option>
                            </select>
                            <label htmlFor="provincia">Provincia</label>
                        </div>

                        <div className="form-floating">
                            <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com"  {...register('email', {required: true})} />
                            <label htmlFor="email">E-mail</label>
                        </div>

                        <div className="form-floating">
                            <input type="number" className="form-control" name="edad" id="edad" placeholder="edad" {...register('edad', {required: true, maxLength:2, min:18})} />
                            <label htmlFor="edad">Edad</label>
                        </div>
                    </div>
                    

                    <div className="form-floating">
                        <input type="text" className="form-control" name="direccion" id="direccion" placeholder="dirección" {...register('direccion', {required: true})} />
                        <label htmlFor="direccion">Domicilio</label>
                    </div>
                </div>

                <div className="align-self-center d-flex">
                    <div className="align-self-center mt-3">
                        <input type="submit" value="Registrar" id="submit" className="btnEnviar bg-dark rounded-3 p-2" />
                    </div>

                    <li className="ms-5 fs-5 d-flex align-items-end">
                        <Link className="link text-primary" to="/login">Ya tienes cuenta? Inicia Sesión</Link>
                    </li>
                </div>
            </form>
        </>
    );
}

