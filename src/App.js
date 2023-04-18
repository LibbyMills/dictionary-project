import "./App.css";
import DictionaryLogo from "./DictionaryLogo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={DictionaryLogo} className="logo" />
        </header>

        <section>
          <Dictionary />
        </section>
      </div>
    </div>
  );
}

export default App;
