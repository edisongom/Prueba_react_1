import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './Buscador';
import Footer from './Footer';
import Paginas from './Paginas';
import Pais from './Pais';
import Ordenar from './Ordenar';

const MiApi = () => {
  const [paises, setPaises] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [orden, setOrden] = useState('asc');
  const elementosPorPagina = 21;

  const obtenerDatos = async () => {
    try {
      const respuesta = await fetch('https://restcountries.com/v3.1/all');
      const datos = await respuesta.json();

      // Traducción de name.common al español
      const paisesTraducidos = datos.map((pais) => {
        const traduccion = pais.translations?.spa?.common ?? pais.name.common;
        return { ...pais, name: { common: traduccion } };
      });

      setPaises(paisesTraducidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);


  const paisesFiltrados = paises.filter((pais) =>
    pais.name.common.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  const manejarCambioPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const elementosActuales = paisesFiltrados.slice(indicePrimerElemento, indiceUltimoElemento);

  const paginasTotales = Math.ceil(paisesFiltrados.length / elementosPorPagina);


  return (
    <div className="container">
      <Buscador terminoBusqueda={terminoBusqueda} onSearch={setTerminoBusqueda} />
      <div className="mb-3">
        <Ordenar
          paisesFiltrados={paisesFiltrados}
          orden={orden}
          setPaises={setPaises}
          setOrden={setOrden}
        />
        <Paginas paginasTotales={paginasTotales} paginaActual={paginaActual} manejarCambioPagina={manejarCambioPagina} />
      </div>
      <div className="row">
        {elementosActuales.map((pais, indice) => (
          <Pais
            key={indice}
            pais={pais}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MiApi;
