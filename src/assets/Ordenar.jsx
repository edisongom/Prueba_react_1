import React from 'react';

const Ordenar = ({ paisesFiltrados, orden, setPaises, setOrden }) => {
  const manejarOrdenamiento = () => {
    const paisesOrdenados = [...paisesFiltrados].sort((a, b) => {
      const nombreA = a.name.common.toLowerCase();
      const nombreB = b.name.common.toLowerCase();
      return nombreA.localeCompare(nombreB);
    });
    setPaises(orden === 'asc' ? paisesOrdenados : paisesOrdenados.reverse());
    setOrden(orden === 'asc' ? 'desc' : 'asc');
  };

  return (
    <button className="btn custom-button" onClick={manejarOrdenamiento}>
      Ordenar {orden === 'asc' ? 'Ascendente' : 'Descendente'}
    </button>
  );
};

export default Ordenar;
