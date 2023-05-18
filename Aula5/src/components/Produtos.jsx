import { listaProdutos } from "./listaProdutos";
import style from "./Produtos.module.css"

function Produtos() {
  return listaProdutos.map((item, index) => {
    return (
      <div className={style.itens} key={index}>
        <h2 className={style.nomes}>{item.nome}</h2>
        <img className={style.img} src={item.image} alt={"imagem "+index}/>
        <p className={style.nomes}>{item.preco}</p>
      </div>
    );
  });
}

export default Produtos;
