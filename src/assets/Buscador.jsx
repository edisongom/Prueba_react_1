import React from 'react';

const Buscador = ({ terminoBusqueda, onSearch }) => {
  const manejarCambio = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1>Lista de Paises</h1></a>
        <div className="navbar-collapse justify-content-end">
          <input
            type="text"
            placeholder="Buscar país..."
            className="form-control mb-3"
            value={terminoBusqueda}
            onChange={manejarCambio}
          />
        </div>
      </div>
    </nav>
  );
};

export default Buscador;
