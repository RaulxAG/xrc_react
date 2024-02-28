import { useEffect, useState } from "react";

export function FetchVehiculos() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/vehiculos/api';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setVehiculos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return vehiculos;
}