const Pais = ({
  pais,
  indice,
}) => {
  const nombre = pais?.name?.common ?? 'Sin Información';
  const capital = pais?.capital?.[0] ?? 'Sin Información';
  const bandera = pais?.flags?.png;
  const region = pais?.region ?? 'Sin Información';
  const nombreNativo = pais?.name?.nativeName?.common ?? 'Sin Información';
  const poblacion = pais?.population ?? 'Sin Información';
  const idiomas = pais && typeof pais.languages === 'object' ? Object.values(pais.languages).join(', ') : 'Sin Información';
  const monedas = pais && typeof pais.currencies === 'object' ? Object.values(pais.currencies).map(curr => `${curr.name} (${curr.symbol})`).join(', ') : 'Sin Información';
  const fronteras = pais && Array.isArray(pais.borders) ? pais.borders.join(', ') : 'Sin Información';

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={bandera} alt="Bandera del País" className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p className="card-text">
            <negrita>Capital: </negrita> {capital}
          </p>
          <p className="card-text">
            <negrita>Región: </negrita> {region}
          </p>
          <p className="card-text">
            <negrita>Nombre nativo: </negrita> {nombreNativo}
          </p>
          <p className="card-text">
            <negrita>Población: </negrita> {poblacion.toLocaleString()}
          </p>
          <p className="card-text">
            <negrita>Idiomas: </negrita> {idiomas}
          </p>
          <p className="card-text">
            <negrita>Monedas: </negrita> {monedas}
          </p>
          <p className="card-text">
            <negrita>Fronteras: </negrita> {fronteras}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pais;

