import { Link } from 'react-router-dom';
import { FetchEventos } from "../FetchEventos";
import { useEffect, useState } from 'react';

export function Eventos() {
    let eventos = FetchEventos();

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h2>Eventos</h2>
            </div>
            
            <ul className="mt-4">
                {eventos.map(evento => (
                    <li key={evento.id} className="mt-5 d-flex container justify-content-between align-items-center bg-dark text-white font-bold rounded-5 p-5">
                        <div className="d-flex container align-items-center justify-content-evenly me-5">
                            
                            <img src={`${evento.imagen}`} width={220} />
                            
                            <div className="d-flex flex-column align-items-center justify-content-between p-3 w-50">
                                <p>Descripcion</p>
                                <p>{evento.descripcion}</p>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-between p-3">
                                <p>Fecha</p>
                                <p>{new Date(evento.fecha).toLocaleDateString('es-ES')}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul> 
        </>
    );
}