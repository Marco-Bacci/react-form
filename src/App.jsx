import { useState } from "react";
function App() {
  const initialArticles = [
    "Calzino spaiato, quartiere in allerta",
    "Divano inghiotte uomo",
    "Piante che giudicano",
    "Attentato a React",
    "Vicino canta alle 3 di notte",
    "Gatto ignora salvataggio eroico",
  ];
  const [articles, setArticles] = useState(initialArticles);
  const [newArticle, setNewArticle] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const copyArticles = [...articles, newArticle];
    setArticles(copyArticles);
    setNewArticle("");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="text-center m-3">LISTA TITOLI </h2>
            <ul className="list-group">
              {articles.map((article, index) => {
                return (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <div>{article}</div>
                    <button type="submit" className="btn btn-danger ">
                      Elimina
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-6">
            <h2 className="text-center m-3">NUOVO TITOLO</h2>
            <form className="mt-5" onSubmit={handleForm}>
              <div className="d-flex gap-3">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  value={newArticle}
                  onChange={(e) => {
                    setNewArticle(e.target.value);
                  }}
                  placeholder="Aggiungi un nuovo titolo di un articolo"
                  aria-label=".form-control-lg example"
                ></input>
                <button type="submit" className="btn btn-outline-dark">
                  INVIA
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
