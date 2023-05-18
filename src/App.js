import "./App.css";
import DictionaryLogo from "./DictionaryLogo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={DictionaryLogo} className="logo" alt="Brand logo" />
        </header>

        <section>
          <Dictionary defaultKeyword="developer" />
        </section>
      </div>
      <footer>
        <small>
          Coded with 💛 by{" "}
          <a
            href="https://github.com/LibbyMills/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Libby Mills
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
