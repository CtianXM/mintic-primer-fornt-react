import logo from "./logo.svg";
import "./App.css";
import MiPrimerComponente from "./components/MiPrimerComponente";

function App() {
  const saludar = <h2>Hola mundo jsx</h2>;
  const parrafo = <p>Esto es un parrafo jsx</p>;

  return (
    <div className="App">
      <header className="App-header">
        {saludar}
        {parrafo}
        <img src={logo} className="App-logo" alt="logo" />
        <MiPrimerComponente />
      </header>
    </div>
  );
}

export default App;
