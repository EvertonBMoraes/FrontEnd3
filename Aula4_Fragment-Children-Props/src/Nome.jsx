function Nome(props) {
  return (
    <>
      {props.children}
      <h2>
        {props.nome}, estudante de {props.cidade}
      </h2>
    </>
  );
}

export default Nome;
