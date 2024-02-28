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
          <header className="container-fluid d-flex align-items-center justify-content-between bg-dark">
            {/* <img src="/assets/img/logo2.png" /> */}
            <Link className="link" to="/home"><h1>X-RC</h1></Link>
            

            <ul className="navegacion d-flex align-items-center">
              <li className="m-2 fs-5">
                <Link className="link" to="/home">Inicio</Link>
              </li>

              {userInLocalStorage && (
                <li className="m-2 fs-5">
                  <Link className="link" to="/vehiculos">Vehiculos</Link>
                </li>
              )}

              {userInLocalStorage && (
                <li className="m-2 fs-5">
                  <Link className="link" to="/reservas">Mis alquileres</Link>
                </li>
              )}

              <li className="m-2 fs-5">
                <Link className="link" to="/eventos">Eventos</Link>
              </li>

              {!userInLocalStorage && (
                <li className="m-2 fs-5">
                  <Link className="link" to="/login">Login</Link>
                </li>
              )}

              {userInLocalStorage && (
                <li className="m-2 fs-5">
                  <Link className="link" to="/logout">Logout</Link>
                </li>
              )}
            </ul>
          </header>

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
          <Route path="/login" element={<LoginUser onLogin={handleLogin} />} ></Route>
          <Route path="/logout" element={<LogoutUser onLogout={handleLogout} />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;