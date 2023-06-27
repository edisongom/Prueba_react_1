import React from 'react';

const Paginas = ({ paginasTotales, paginaActual, manejarCambioPagina }) => {
  return (
    <div className="responsive-p">
      {paginaActual > 1 && (
        <button className='btn custom-button' onClick={() => manejarCambioPagina(paginaActual - 1)}>
          Página anterior
        </button>
      )}
      
      <span className="margin-text">Página {paginaActual} de {paginasTotales}</span>

      {paginaActual < paginasTotales && (
        <button className='btn custom-button' onClick={() => manejarCambioPagina(paginaActual + 1)}>
          Página siguiente
        </button>
      )}
    </div>
  );
};

export default Paginas;
