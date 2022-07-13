
import './App.css';
import NavBar from './components/NavBar';
import ProductosEjemplo from "./components/ItemListContainer";

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
      <ProductosEjemplo nombre="Ryzen 5 5600G" precio="250USD$" stock={9}/>
      <hr />
      <ProductosEjemplo nombre="ASUS RTX 3060" precio="600USD$" stock={3}/>
    </div>
  );
}

export default App;
