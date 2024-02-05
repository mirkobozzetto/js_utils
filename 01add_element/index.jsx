import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Assurez-vous que le chemin vers le fichier App est correct

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Assurez-vous que l'ID de l'élément racine est correct
);
