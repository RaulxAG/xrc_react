import { Link, useParams } from 'react-router-dom';
import { FetchReservas } from "../FetchReservas";
import { useEffect, useState } from 'react';

export function Reservas() {
    let reservas = FetchReservas();

    let dniActual = localStorage.getItem('usuario');

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                {/* <Link to="/agregar_reserva" className="btnAdd p-3 rounded-4">
                    Añadir
                </Link> */}
                <h2>Mis reservas</h2>
            </div>

            <ul className="mt-4">
                {reservas
                    .filter(reserva => reserva.fk_dni === dniActual) // Filtrar por dniActual
                    .map(reserva => (
                    <li key={reserva.id} className="tarjetaVehiculo d-flex flex-column flex-lg-row container justify-content-between align-items-center bg-dark text-white font-bold rounded-5">
                        <div className="tarjetaPropiedad d-flex container align-items-center justify-content-evenly me-5">
                            <div className="d-flex flex-column align-items-center justify-content-between p-3">
                                <img src={reserva.fk_vehiculo['imagen']} width={250}/>
                            </div>
                            <div className="d-none d-md-block d-flex flex-column align-items-center justify-content-between p-3">
                                <p>Vehiculo</p>
                                <p>{reserva.fk_vehiculo['marca']} {reserva.fk_vehiculo['modelo']}</p>
                            </div>
                            <div className="d-none d-md-block d-flex flex-column align-items-center justify-content-between p-3">
                                <p>Usuario</p>
                                <p>{reserva.fk_dni}</p>
                            </div>
                            <div className="d-none d-md-block d-flex flex-column align-items-center justify-content-between p-3">
                                <p>Fecha</p>
                                <p>{new Date(reserva.fecha).toLocaleDateString('es-ES')}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Link to="/editar_reserva" className="btonVehiculo m-2 p-3 rounded-4">
                                Editar
                            </Link>
                        </div>
                    </li>
                ))}
            </ul> 
        </>
    );
}