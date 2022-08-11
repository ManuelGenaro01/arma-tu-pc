import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { CartContext } from "./CartContext";

function NavBar() {
    const cart = useContext(CartContext)
    return (
        <header className="navFlex">
            <div>
                <ul  className="navBar">
                    <li><Link to="/" className="logo">Todo Computación!</Link></li>
                </ul>
            </div>
            <div>
                <ul  className="navBar"> 
                    <li><Link to="category/1" className="a">Procesadores</Link></li>
                    <li><Link to="category/3" className="a">Motherboards</Link></li>
                    <li><Link to="category/2" className="a">GPU</Link></li>
                    <li><Link to="category/4" className="a">Memorias Ram</Link></li>
                    <li><Link to="category/4" className="a">Almacenamiento</Link></li>
                    <li><Link to="category/4" className="a">Gabinetes</Link></li>
                    <li><Link to="category/4" className="a">PSU</Link></li>
                    <li><Link to="category/4" className="a">Otros</Link></li>
                </ul>
            </div>
                <div>
                    <ul className="navBar">
                         {cart.cartValue.length>0?
                            <li>
                                 <div ><Link to="Cart" className="cart a"><CartWidget /></Link></div>
                            </li>
                        :""}
                    </ul>
                </div>
        </header>
        
        
    )
    
};
export default NavBar;
