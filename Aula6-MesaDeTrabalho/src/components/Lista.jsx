function Lista({ id, country, city, population, color }) {
  return (
      <div>
        <h3>ID: {id}</h3>
        <h2>País: {country}</h2>
        <h3>Cidade: {city}</h3>
        <h3>População: {population}</h3>
        <h4>Cor: {color}</h4>
      </div>
  );
}

export default Lista;
