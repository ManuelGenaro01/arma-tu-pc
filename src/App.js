
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

const ItemList=()=>{
  return(
    <ItemListContainer />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {ItemList()}
      </header>
    </div>
  );
}

export default App;
