function Tabela() {
  return (
    <div className="container">
      <table border="1" className="line_title">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Quantidade de Alunos</th>
            <th>Média das notas dos alunos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Banco de Dados</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Desenvolvimento Frontend</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Desenolvimento Backend</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
