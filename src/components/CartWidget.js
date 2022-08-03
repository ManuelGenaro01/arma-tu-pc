import React, { useContext } from "react";
import logo from "../cartIc.png"
import { CartContext } from "./CartContext";

const CartWidget =()=>{
    const { totalProductos } = useContext(CartContext)
    return(
        <>
        <div className="cartWid">
            <img src={logo} height="21 px" alt="cart"/>
            <p className="text">{(totalProductos())||""}</p>
        </div>
        </>
    )
}

export default CartWidget