import React, { useContext } from "react";
import logo from "../cartIc.png"
import { CartContext } from "./CartContext";

const CartWidget =()=>{
    const cart = useContext(CartContext)
    return(
        <>
        {cart.cartValue.length>0?
        <div className="a cartWid">
            <img src={logo} height="21 px" alt="cart"/>
            <p className="text">{(cart.totalProductos())||""}</p>
        </div>:""
        }
        </>
    )
}

export default CartWidget