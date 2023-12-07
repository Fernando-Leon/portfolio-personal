'use client'
import React, { useState } from 'react';

const Traductor = ({ lenguajes, informacionInicial }) => {
  const [lenguajeActual, setLenguajeActual] = useState('es'); // Estado para almacenar el lenguaje actual
  const [informacion, setInformacion] = useState(informacionInicial);

  // Función para cambiar el lenguaje actual
  const cambiarLenguaje = () => {
    const nuevoLenguaje = lenguajeActual === 'es' ? 'en' : 'es';
    setLenguajeActual(nuevoLenguaje);

    // Traducir la información al nuevo lenguaje
    const nuevaInformacion = lenguajes[nuevoLenguaje];
    setInformacion(nuevaInformacion);
  };

  return (
    <div>
      <h1>{informacion.titulo}</h1>
      <p>{informacion.descripcion}</p>
      <button onClick={cambiarLenguaje}>Cambiar Lenguaje</button>
    </div>
  );
};

export default Traductor;
