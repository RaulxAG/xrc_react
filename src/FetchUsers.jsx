import { useEffect, useState } from "react";

export function FetchUsers() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/usuarios/api';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // El segundo argumento [] indica que este efecto se ejecutará solo una vez al montar el componente

  return usuarios;
}