import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { FetchVehiculos } from "../FetchVehiculos";

export function FormularioReserva() {
    let { idVehiculo } = useParams();
    const [mensaje, setMensaje] = useState(null);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const usuario = localStorage.getItem('usuario');
    const vehiculos = FetchVehiculos();

    const vehiculoSeleccionado = vehiculos.find(vehiculo => idVehiculo === vehiculo.id);

    async function onSubmit(data) {
        console.log(data);

        try {
            const response = await fetch('http://127.0.0.1:8000/alquileres/api/new', {
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
                <h1 className="text-center">Nueva Reserva</h1>
                
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="formHook pt-3 d-flex flex-column justify-content-center" action="" method="post">
                {mensaje && (
                    <span className="alert alert-primary" role="alert">{mensaje}</span>
                )}
                    
                {errors.vehiculo && <span className="alert alert-warning" role="alert">Debes seleccionar un vehículo</span>}
                {errors.usuario && <span className="alert alert-warning" role="alert">Debes seleccionar un usuario</span>}
                {errors.fecha && <span className="alert alert-warning" role="alert">Debes seleccionar una fecha</span>}
                
                <div className="align-self-center">
                    <div className="d-flex">
                        <div className="form-floating">
                                <select className="form-select" name="vehiculo" id="vehiculo" {...register('vehiculo')} >
                                    <option value="-">Selecciona</option>
                                    {vehiculos.map(vehiculo => (
                                        idVehiculo === vehiculo.id.toString() && (
                                            <option key={vehiculo.id} value={vehiculo.id}>
                                                {`${vehiculo.marca} ${vehiculo.modelo}`}
                                            </option>
                                        )
                                    ))}
                                </select>
                                <label htmlFor="vehiculo">Vehiculo</label>
                        </div>

                        <div className="form-floating">
                            <select className="form-select" name="usuario" id="usuario" {...register('usuario', {required: true})} >
                                <option value={usuario}>{usuario}</option>
                            </select>
                            <label htmlFor="usuario">Usuario</label>
                        </div>

                        <div className="form-floating">
                            <input type="date" className="form-control" name="fecha" id="fecha" placeholder="fecha" {...register('fecha', {required: true})} />
                            <label htmlFor="fecha">Fecha</label>
                        </div>
                    </div>
                </div>

                <div className="align-self-center mt-3">
                    <input type="submit" value="Registrar" id="submit" className="btnEnviar bg-dark rounded-3 p-2" />
                </div>

                <div className="align-self-center mt-3">
                    <input type="reset" value="Limpiar" id="submit" className="btnEnviar bg-dark rounded-3 p-2" />
                </div>
            </form>
        </>
    );
}