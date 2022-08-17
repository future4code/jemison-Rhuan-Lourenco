import React from "react";
import axios from "axios";
import { BotaoReset } from "./styled";


function ResetButton() {

  const urlClear = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rhuan-victor-jemison/clear";

  const clearMatch = () => {
    axios
      .put(urlClear)
      .then(() => {
        alert("clear")
      })
      .catch((error) => {
        console.log(error.response.data)
      })
  }

  return (
    <div>
      <BotaoReset onClick={clearMatch}>Reset Match</BotaoReset>
    </div>
  );
};

export default ResetButton;