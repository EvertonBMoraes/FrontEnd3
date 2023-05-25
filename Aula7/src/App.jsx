import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";

function App() {
const [array, setArray] = useState([])

const geraItem = () =>{
  setArray(array.push(<h4>Item número</h4>));
}

  return (
    <>
      <h1>Lista</h1>
      <Button
      onClick={geraItem}
      type={"button"}
      conteudo={"Adicionar Item"} />
      <div>{array}</div>
    </>
  );
}

export default App;



