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
        <div className="row">
          <div className="col-6">
            <h2 className="text-center m-3">LISTA TITOLI </h2>
            {articles.map((article) => {
              return (
                <ul class="list-group">
                  <li class="list-group-item">{article}</li>
                </ul>
              );
            })}
          </div>
          <div className="col-6">
            <h2 className="text-center m-3">NUOVO TITOLO</h2>
            <form className="mt-5">
              <div className="form d-flex gap-3">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Aggiungi un nuovo titolo di un articolo"
                  aria-label=".form-control-lg example"
                ></input>
                <button type="button" class="btn btn-outline-dark">
                  Dark
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
