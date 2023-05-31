import { useState } from "react";
import "./App.css";
import CardComponent from "./Components/Card/CardComponent";
import InputComponent from "./Components/Input/InputComponent";
import CardListComponent from "./Components/Card/CardListComponent";

function App() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [cardList, setCardList] = useState([]);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value);
  };

  const regex = /[0-9]/;
  const mensagemErro = "Por favor, verifique os dados inseridos no formulário!"

  const handleButtonClick = (event) => {
    event.preventDefault();
    document.getElementById("mensagem_erro").innerText = ""
    if (title.length>=3 && imgUrl.length>=6 && regex.test(imgUrl)) {
    setCardList([
      ...cardList,
      {
        title: title,
        imgUrl: imgUrl,
      },
    ]);
    setTitle("")
    setImgUrl("")
    document.getElementById("exemplo").innerText = ""
    } else{
    document.getElementById("mensagem_erro").innerText = mensagemErro
    }
  };

  const handleButtonClickLimpar = (event) => {
    event.preventDefault();
    document.getElementById("mensagem_erro").innerText = ""
    document.getElementById("cardContainer").innerHTML = ""
    setTitle("")
    setImgUrl("")
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

        <button onClick={handleButtonClick}>Enviar</button>
        <button onClick={handleButtonClickLimpar}>Limpar</button>
        <p id="mensagem_erro"></p>
      </form>
      <CardListComponent>
        {cardList.map((card) => {
          return <CardComponent 
          key={card.title}
          title={card.title} 
          imgUrl={card.imgUrl} />;
        })}
      </CardListComponent>
      <div id="exemplo">Ex: <br />
        Summoned Skull <br />
        https://ms.yugipedia.com//thumb/b/bc/SummonedSkull-MRD-EN-UR-UE-25thAnniversaryEdition.png/300px-SummonedSkull-MRD-EN-UR-UE-25thAnniversaryEdition.png</div>
    </>
  );
}

export default App;
