import { listaProdutos } from "./listaProdutos";

function Produtos() {
  return listaProdutos.map((item, index) => {
    return (
      <div key={index}>
        <h1>{item.nome}</h1>
        <img src={item.image} />
        <p>{item.preco}</p>
      </div>
    );
  });
}

export default Produtos;

