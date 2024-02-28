import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FetchVehiculos } from "../FetchVehiculos";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function Vehiculos() {
    //busqueda
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

    const navigate = useNavigate();

    useEffect(() => {
        // Actualizar la URL con la barra de búsqueda
        navigate({ search: `?query=${debouncedSearchQuery}` });
        console.log(useQuery);

        // setVehiculos con los resultados obtenidos.
    }, [debouncedSearchQuery, navigate]);

    //scroll
    const [vehiculosScroll, setVehiculos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [hasMore, setHasMore] = useState();
    
    let vehiculos = FetchVehiculos();

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                {/* <Link to="/agregar_vehiculo" className="btnAdd p-3 rounded-4">
                    Añadir
                </Link> */}
                <h2>Catálogo de vehículos</h2>
            </div>

            <div className='container d-flex justify-content-between'>
                <input
                    type="search"
                    name="query"
                    id="query"
                    placeholder="Buscar vehículos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select name="filtro" id="filtro">
                    <option selected>Filtrar</option>
                    <option value="categorias">Categorias</option>
                    <option value="cv-menormayor">Potencia - menor a mayor</option>
                    <option value="cv-mayormenor">Potencia - mayor a menor</option>
                </select>
            </div>
            
            <ul className="mt-4">
                {vehiculos.length <= 0 && (
                    <div class="d-flex mt-5 justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                
                {vehiculos.map(vehiculo => (
                    <li key={vehiculo.id} className="tarjetaVehiculo d-flex container justify-content-between align-items-center bg-dark text-white font-bold rounded-5">
                        <div className="tarjetaPropiedad d-flex container align-items-center justify-content-evenly me-5">
                            <div className="d-flex flex-column align-items-center justify-content-between p-3">
                                <img src={`${vehiculo.imagen}`} width={220} />
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-between p-3">
                                <p>Marca</p>
                                <p>{vehiculo.marca}</p>
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-between p-3">
                                <p>Modelo</p>
                                <p>{vehiculo.modelo}</p>
                            </div>
                        </div>
                        {/* <div className="d-flex flex-column align-items-center justify-content-between p-3">
                            <p>Potencia</p>
                            <p>{vehiculo.potencia} cv</p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-between p-3">
                            <p>Sobrealimentado</p>
                            <p>{vehiculo.sobrealimentado}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-between p-3">
                            <p>Tracción</p>
                            <p>{vehiculo.traccion}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-between p-3">
                            <p>Velocidad Máx.</p>
                            <p>{vehiculo.velocidad_max} km/h</p>
                        </div> */}
                        <div className="d-flex align-items-center justify-content-center">
                            <Link to={`/detalle_vehiculo/${vehiculo.id}`} className="btonVehiculo m-2 p-3 rounded-4">
                                Detalle
                            </Link>
                            <Link to={`/agregar_reserva/${vehiculo.id}`} className="btonVehiculo m-2 p-3 rounded-4">
                                Alquilar
                            </Link>
                        </div>
                    </li>
                ))}
            </ul> 
        </>
    );
}