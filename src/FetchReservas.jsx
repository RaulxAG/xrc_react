import { useEffect, useState } from "react";

export function FetchReservas() {
  const [alquileres, setAlquileres] = useState([]);

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/alquileres/api';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setAlquileres(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // El segundo argumento [] indica que este efecto se ejecutará solo una vez al montar el componente

  return alquileres;
}