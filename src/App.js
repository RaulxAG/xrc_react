import React, { useEffect, useState } from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { FetchUsers } from "./FetchUsers";
import { RegisterUser } from "./components/RegisterUser";
import { Inicio } from "./components/Inicio";
import { Vehiculos } from "./components/Vehiculos";
import { FormularioVehiculo } from "./components/FormularioVehiculo";
import { LoginUser } from "./components/LoginUser";
import { LogoutUser } from "./components/LogoutUser";
import { Reservas } from "./components/Reservas";
import { DetalleVehiculo } from "./components/DetalleVehiculo";
import { FormularioReserva } from "./components/FormularioReserva";
import { Eventos } from "./components/Eventos";
import { Contacto } from "./components/Contacto";

function App() {
  const [userInLocalStorage, setUserInLocalStorage] = useState(null);

  useEffect(() => {
    // Check if the user exists in localStorage
    const user = localStorage.getItem('usuario');
    setUserInLocalStorage(user);
  }, []);

  const handleLogout = () => {
    setUserInLocalStorage(null);
  };

  const handleLogin = (user) => {
    setUserInLocalStorage(user);
  };

  return (
    <div>
      {/* <h1>Usuarios API:</h1> */}
      {/* Renderiza la lista de usuarios aquí */}
      {/* <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.username}</li>
        ))}
      </ul> */}
        <Router>
          
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
          <div class="container-fluid d-flex">
            <div>
              <Link className="link" to="/home"><h1>X-RC</h1></Link>
            </div>
            
            <div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              
            </div>
            <div class="ms-3 collapse navbar-collapse text-center" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li className="iconoNavegacion me-3 ms-3 mt-2" title="Inicio">
                    <Link className="link" to="/home">
                      Inicio
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                      </svg> */}
                    </Link>
                  </li>

                  {/* {userInLocalStorage && ( */}
                    <li className="iconoNavegacion me-3 ms-3 mt-2" title="Vehículos">
                      <Link className="link" to="/vehiculos">
                        Vehiculos
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                          <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                        </svg> */}
                      </Link>
                    </li>
                  {/* )} */}

                  {/* {userInLocalStorage && ( */}
                    <li className="iconoNavegacion me-3 ms-3 mt-2" title="Mis Alquileres">
                      <Link className="link" to="/reservas">
                        Mis alquileres
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
                          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                        </svg> */}
                      </Link>
                    </li>
                  {/* )} */}

                  <li className="iconoNavegacion me-3 ms-3 mt-2" title="Eventos">
                    <Link className="link" to="/eventos">
                      Eventos
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16">
                        <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                      </svg> */}
                    </Link>
                  </li>

                  <li className="iconoNavegacion me-3 ms-3 mt-2" title="Contacto">
                    <Link className="link" to="/contacto">
                      Contacto
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
                      </svg> */}
                    </Link>
                  </li>

                  {!userInLocalStorage && (
                    <li className="iconoNavegacion me-3 ms-3 mt-2" title="Login">
                      <Link className="link" to="/login">
                        Login
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg> */}
                      </Link>
                    </li>
                  )}

                  {userInLocalStorage && (
                    <li className="iconoNavegacion me-3 ms-3 mt-2">
                      <Link className="link" to="/logout">
                        Logout
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708"/>
                        </svg> */}
                      </Link>
                    </li>
                  )}        
                </ul>
              </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} ></Route>
          <Route path="/home" element={<Inicio />} ></Route>
          <Route path="/vehiculos" element={<Vehiculos />} ></Route>
          <Route path="/agregar_vehiculo" element={<FormularioVehiculo />}></Route>
          <Route path="/detalle_vehiculo/:id" element={<DetalleVehiculo />} ></Route>
          <Route path="/register" element={<RegisterUser />} ></Route>
          <Route path="/reservas" element={<Reservas />} ></Route>
          <Route path="/agregar_reserva/:idVehiculo" element={<FormularioReserva />} ></Route>
          <Route path="/eventos" element={<Eventos />} ></Route>
          <Route path="/contacto" element={<Contacto />} ></Route>
          <Route path="/login" element={<LoginUser onLogin={handleLogin} />} ></Route>
          <Route path="/logout" element={<LogoutUser onLogout={handleLogout} />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;