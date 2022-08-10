
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart"
import CartContextProvider from "./components/CartContext"
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/Cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer toastStyle={{ backgroundColor: "#2a56b5", color: "white" }}/>
    </CartContextProvider>
  );
}

export default App;
