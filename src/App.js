import "./App.css";
import DisplaySimpsonCharacter from "./components/DisplaySimpsonCharacter";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const example = {
    quote: "Not cool !",
    character: "Thomas Torvalds",
    image:
      "https://cdn.discordapp.com/attachments/815964927515820052/819923884354175017/unknown.png",
  };
  const [simpsonCharacter, setSimpsonCharacter] = useState(example);
  const getSimpsonCharacter = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setSimpsonCharacter(data[0]);
      });
  };
  return (
    <div className="App">
      <button type="button" onClick={getSimpsonCharacter}>
        Get a Simpson Character !
      </button>
      <DisplaySimpsonCharacter simpsonCharacter={simpsonCharacter} />
    </div>
  );
}
