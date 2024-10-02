import { useEffect, useState } from "react";

export function FetchVehiculoDetalle({ id }) {
  const [vehiculo, setVehiculo] = useState([]);
  useEffect(() => {
    const url = `http://127.0.0.1:8000/vehiculos/api/${id}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setVehiculo(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return vehiculo;
}