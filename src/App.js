
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className="section">
          <h1>Bienvenido a Todo Computación!</h1>
          <p>Aquí podrás encontrar muchisimos componentes para tu pc a muy buenos precios!</p>
      </div>
      <hr />
      <ItemListContainer />
    </div>
  );
}

export default App;
