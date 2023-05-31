import style from "./CardComponent.module.css";

function CardComponent(props) {

    // const imgUrlDefault = "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg";

    return (
        <div className={style.div}>
            <h2 className={style.title}>{props.title}</h2>
            <img className={style.img} src={props.imgUrl} alt="img do card" />
        </div>
    );
}

export default CardComponent;