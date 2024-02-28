import { Link } from "react-router-dom";

export function Inicio() {
    return (
        <>
            <section className="bienvenidaInicio">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="driftCarousel d-block w-100 d-flex align-items-center justify-content-center">
                                <img src={'./assets/img/css/driftBackground.jpg'} class="w-100 carouselFoto" alt="..." />
                                <img src={'./assets/img/css/smoke.png'} alt="" className="w-100 smoke carouselFoto" />
                                <img src={'./assets/img/css/s15.png'} class="w-50 driftCar carouselFoto" alt="..." />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="driftCarousel d-block w-100 d-flex align-items-center justify-content-center">
                                <img src={'./assets/img/css/dust.png'} class="carouselFoto dust" alt="..." />
                                <img src={'./assets/img/css/rallyBackground.jpg'} class="w-100 carouselFoto" alt="..." />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="driftCarousel d-block w-100 d-flex align-items-center justify-content-center">
                                <img src={'./assets/img/css/volrace.jpg'} alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="btn-inferior d-flex flex-column w-100 align-items-center fs-4">
                    <a href="#inicio" className="border border-3 border-dark btn btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </a>
                </div>
            </section>

            <section id="inicio" className="sectionInicio d-flex flex-column align-items-center justify-content-center">
                <article className="d-flex flex-column text-center justify-content-center align-items-center p-5">
                    <h1 className="mb-5">Reserva con facilidad, conduce con pasión</h1>
                    <p className="mb-5">
                    En Xtreme Race Cars, hacer realidad tus sueños de pilotaje es más fácil que nunca.
                    Nuestra plataforma de reservas simple y eficiente te permite reservar el coche de tus sueños para tu próxima competición o para tus entrenamientos.
                    </p>
                    <Link to="/contacto" className="w-50 btn button button--bg align-self-center">
                        <span>Dudas? Contacta con nosotros.</span>
                    </Link>
                </article>
            </section>
        </>
    );
}