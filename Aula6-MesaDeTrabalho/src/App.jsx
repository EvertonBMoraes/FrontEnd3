import "./App.css";
import React from "react";
import Lista from "./components/Lista";
import { cities } from "../cities";

function App() {
  return (
    <div>
      <h1>População</h1>
      {cities.map((index, item) => {
        <Lista 
        key={index}
        id={item.id}
        country={item.country}
        city={item.city}
        population={item.population}
        color={item.color}
        // {...item}
        />;
      })}
    </div>
  );
}

export default App;
