function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="container_input">
        <select>
          <option selected disabled>
            Selecione uma disciplina
          </option>
          <option value="database">Banco de Dados</option>
          <option value="backend">Desenvolvimento Backend</option>
          <option value="frontend">Desenvolvimento Frontend</option>
          <option value="devops">Devops</option>
        </select>
        <input />
      </div>
      <input type="submit" value="Salvar" />
    </form>
  );
}
export default Form;
