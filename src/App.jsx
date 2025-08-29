import { useState } from "react";

function App() {
  const articles = [
    "Calzino spaiato, quartiere in allerta",
    "Divane inghiotte uomo",
    "Piante che giudicano",
    "Attentato a React",
    "Vicino canta alle 3 di notte",
    "Gatto ignora salvataggio eroico",
  ];
  return (
    <>
      <div className="container">
        <h1 className="text-center m-3">LISTA DI ARTICOLI </h1>
        {articles.map((article) => {
          return (
            <ul class="list-group">
              <li class="list-group-item">{article}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default App;
