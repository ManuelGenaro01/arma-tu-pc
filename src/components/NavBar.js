import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { CartContext } from "./CartContext";

function NavBar() {
    const cart = useContext(CartContext)
    return (
        <div>
            <ul className="navBar">
                <li><Link to="/" className="logo">Todo Computación!</Link></li>
                <li><Link to="category/1" className="a">Procesadores</Link></li>
                <li><Link to="category/3" className="a">Motherboards</Link></li>
                <li><Link to="category/2" className="a">GPU</Link></li>
                <li><Link to="category/4" className="a">Memorias Ram</Link></li>
                {cart.cartValue.length>0?
                <li className="cart" style={{"float":"left"}}><Link to="Cart" className="a"><CartWidget /></Link></li>:""}
            </ul>
        </div>
        
        
    )
    
};
export default NavBar;
