import { Link, useParams } from 'react-router-dom';
import { FetchVehiculoDetalle } from '../FetchVehiculoDetalle';

export function DetalleVehiculo() {
    const { id }  = useParams();
    const vehiculo = FetchVehiculoDetalle({id});

    console.log(vehiculo);

    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='mt-5 d-flex align-items-center justify-content-center'>
                    <div>
                        <img src={vehiculo.imagen} width={450} className='me-5 pe-5' />
                    </div>

                    <div className=''>
                        <h1>{vehiculo.marca} {vehiculo.modelo}</h1>
                        <div className='d-flex'>
                            <h4 className='me-3'>Potencia: {vehiculo.potencia}CV</h4>
                            <h4 className='ms-3'>Tracción: {vehiculo.traccion}</h4>
                        </div>
                        <div className='d-flex'>
                            <h4 className='me-3'>Categoria: {vehiculo.categoria}</h4>
                            <h4 className='ms-3'>Combustible: {vehiculo.combustible}</h4>
                        </div>
                        <div className='d-flex'>
                            <h4 className='me-3'>Sobrealimentado: {vehiculo.sobrealimentado}</h4>
                            <h4 className='ms-3'>Nº Cilindros: {vehiculo.cilindros}</h4>
                        </div>
                        <div className='d-flex'>
                            <h4 className='me-3'>Velocidad Máxima: {vehiculo.velocidadMax} km/h</h4>
                        </div>
                    </div>
                </div>

                <Link to="/vehiculos" className="btonVehiculo bg-dark mt-3 p-4 w-15 text-white rounded-4">
                    Volver
                </Link>
            </div>
        </>
    );
}