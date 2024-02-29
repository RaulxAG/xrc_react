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
                    <a href="#categorias" className="btn btn-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </a>
                </div>
            </section>

            <section id="categorias" className="container-fluid w-75 containerCategorias d-flex flex-wrap">
                <article class="rounded box mb-5">
                    <div class="imgBx">
                        <img src="./assets/img/css/rallyCard.jpg" alt="" />
                    </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="contentBx">
                        <div>
                            <h2>Post Title One</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptate cupiditate porro quia ex, quo impedit sit nemo
                                fugiat ullam sed aspernatur magni neque rem eaque quae! 
                                Debitis non nulla minima.
                            </p>
                        </div>
                    </div>
                </article>

                <article class="rounded box mb-5">
                    <div class="imgBx">
                        <img src="./assets/img/css/driftCard.jpg" alt="" />
                    </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="contentBx">
                        <div>
                            <h2>Post Title One</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptate cupiditate porro quia ex, quo impedit sit nemo
                                fugiat ullam sed aspernatur magni neque rem eaque quae! 
                                Debitis non nulla minima.
                            </p>
                        </div>
                    </div>
                </article>

                <article class="rounded box mb-5">
                    <div class="imgBx">
                        <img src="./assets/img/css/superCard.jpeg" alt="" />
                    </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="contentBx">
                        <div>
                            <h2>Post Title One</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptate cupiditate porro quia ex, quo impedit sit nemo
                                fugiat ullam sed aspernatur magni neque rem eaque quae! 
                                Debitis non nulla minima.
                            </p>
                        </div>
                    </div>
                </article>

                <article class="rounded box mb-5">
                    <div class="imgBx">
                        <img src="./assets/img/css/usdmCard.jpg" alt="" />
                    </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="contentBx">
                        <div>
                            <h2>Post Title One</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptate cupiditate porro quia ex, quo impedit sit nemo
                                fugiat ullam sed aspernatur magni neque rem eaque quae! 
                                Debitis non nulla minima.
                            </p>
                        </div>
                    </div>
                </article>

                <article class="rounded box mb-5">
                    <div class="imgBx">
                        <img src="./assets/img/css/jdmCard.jpg" alt="" />
                    </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="contentBx">
                        <div>
                            <h2>Post Title One</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptate cupiditate porro quia ex, quo impedit sit nemo
                                fugiat ullam sed aspernatur magni neque rem eaque quae! 
                                Debitis non nulla minima.
                            </p>
                        </div>
                    </div>
                </article>

                <article class="rounded box mb-5">
                    <div class="imgBx">
                        <img src="./assets/img/css/edmCard.jpeg" alt="" />
                    </div>
                    <div class="layer layer1"></div>
                    <div class="layer layer2"></div>
                    <div class="contentBx">
                        <div>
                            <h2>Post Title One</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptate cupiditate porro quia ex, quo impedit sit nemo
                                fugiat ullam sed aspernatur magni neque rem eaque quae! 
                                Debitis non nulla minima.
                            </p>
                        </div>
                    </div>
                </article>
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