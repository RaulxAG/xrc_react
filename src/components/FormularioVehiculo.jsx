import { useForm } from "react-hook-form";
import { useState } from 'react';

export function FormularioVehiculo() {
    const [mensaje, setMensaje] = useState(null);
    const { register, formState: { errors }, handleSubmit } = useForm();

    async function onSubmit(data) {
        console.log(data);

        try {
            const response = await fetch('http://127.0.0.1:8000/vehiculos/api/new', {
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
                <h1 className="text-center">Nuevo Vehículo</h1>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="formHook pt-3 d-flex flex-column justify-content-center" action="" method="post">
                {mensaje && (
                    <span className="alert alert-primary" role="alert">{mensaje}</span>
                )}
                    
                {errors.marca && <span className="alert alert-warning" role="alert">Debes rellenar la marca</span>}
                {errors.modelo && <span className="alert alert-warning" role="alert">Debes rellenar el modelo</span>}
                {errors.potencia && <span className="alert alert-warning" role="alert">Debes rellenar la potencia</span>}
                {errors.categoria && <span className="alert alert-warning" role="alert">Debes rellenar la categoria</span>}
                {errors.combustible && <span className="alert alert-warning" role="alert">Debes rellenar la combustible</span>}
                {errors.cilindros && <span className="alert alert-warning" role="alert">Debes rellenar los cilindros</span>}
                {errors.velocidadMax && <span className="alert alert-warning" role="alert">Debes rellenar la velocidad máxima</span>}
                
                <div className="align-self-center">

                    <div className="form-floating">
                        <input type="text" className="form-control" name="imagen" id="imagen" placeholder="imagen" {...register('imagen', {required: true})} />
                        <label htmlFor="imagen">URL de la imagen</label>
                    </div>

                    <div className="d-flex">
                        <div className="form-floating">
                            <input type="text" className="form-control" name="marca" id="marca" placeholder="Marca" {...register('marca', {required: true})} />
                            <label htmlFor="marca">Marca</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" name="modelo" id="modelo" placeholder="Modelo" {...register('modelo', {required: true})} />
                            <label htmlFor="modelo">Modelo</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control" name="potencia" id="potencia" placeholder="potencia" {...register('potencia', {required: true})} />
                            <label htmlFor="potencia">Potencia</label>
                        </div>

                        <div class="form-check align-self-center">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" {...register('sobrealimentado')} />
                            <label className="form-check-label" for="flexCheckDefault">Es sobrealimentado?</label>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="form-floating">
                                <select className="form-select" name="traccion" id="traccion" {...register('traccion', {required: true})} >
                                    <option selected>Seleccionar</option>
                                    <option value="FWD">FWD</option>
                                    <option value="RWD">RWD</option>
                                    <option value="AWD">AWD</option>
                                </select>
                                <label htmlFor="traccion">Tracción</label>
                        </div>

                        <div className="form-floating">
                            <select className="form-select" name="combustible" id="combustible" {...register('combustible', {required: true})} >
                                <option selected>Seleccionar</option>
                                <option value="Gasolina">Gasolina</option>
                                <option value="Diesel">Diésel</option>
                            </select>
                            <label htmlFor="combustible">Combustible</label>
                        </div>

                        <div className="form-floating">
                                <select className="form-select" name="categoria" id="categoria" {...register('categoria', {required: true})} >
                                    <option selected>Seleccionar</option>
                                    <option value="EDM">EDM</option>
                                    <option value="JDM">JDM</option>
                                    <option value="USDM">USDM</option>
                                    <option value="Super">Super</option>    
                                    <option value="Rally">Rally</option>
                                    <option value="Drift">Drift</option>
                                </select>
                                <label htmlFor="categoria">Categoria</label>
                        </div>

                        <div className="form-floating w-25">
                            <input type="number" className="form-control" name="cilindros" id="cilindros" placeholder="cilindros" {...register('cilindros', {required: true})} />
                            <label htmlFor="cilindros">Nº Cilindros</label>
                        </div>

                        <div className="form-floating w-25">
                            <input type="number" className="form-control" name="velocidadMax" id="velocidadMax" placeholder="velocidadMax" {...register('velocidadMax', {required: true})} />
                            <label htmlFor="velocidadMax">Velocidad Máxima</label>
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