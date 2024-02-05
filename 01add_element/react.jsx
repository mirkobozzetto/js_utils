import React, { useState } from "react";

function App() {
  const [paragraphs, setParagraphs] = useState([
    "Paragraphe 1",
    "Paragraphe 2",
  ]);

  const addParagraph = () => {
    setParagraphs([...paragraphs, "Nouveau paragraphe"]);
  };

  return (
    <div id="container">
      {paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <button onClick={addParagraph}>Ajouter un paragraphe</button>
    </div>
  );
}

export default App;
