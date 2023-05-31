import { useState } from "react";
import "./App.css";
import CardComponent from "./Components/Card/CardComponent";
import InputComponent from "./Components/Input/InputComponent";
import CardListComponent from "./Components/Card/CardListComponent";

function App() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  // const [card, setCard] = useState({});
  const [cardList, setCardList] = useState([]);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    setCardList([
      ...cardList,
      {
        title: title,
        imgUrl: imgUrl,
      },
    ]);
  };

  return (
    <>
      <h1>Cards de Yu-Gui-Oh!</h1>
      <h3>by Everton Moraes</h3>

      <form>
        <InputComponent
          title="Nome do Card"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
        />

        <InputComponent
          title="Img URL"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
        />

        <button onClick={handleButtonClick}>Salvar</button>
      </form>
      <CardListComponent>
        {cardList.map((card) => {
          return <CardComponent 
          key={card.title}
          title={card.title} 
          imgUrl={card.imgUrl} />;
        })}
      </CardListComponent>
    </>
  );
}

export default App;
