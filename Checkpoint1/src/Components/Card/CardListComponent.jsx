import style from "./CardListComponent.module.css";

function CardListComponent(props) {
  return (
  <div id="cardContainer" className={style.div}>
    {props.children}
    </div>
  )
}

export default CardListComponent;
