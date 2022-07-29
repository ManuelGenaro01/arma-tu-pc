import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import { CartContext } from "./CartContext";

const ItemDetail=({items})=>{
    const [cantidad, setCantidad]= useState(0)
    const test = useContext(CartContext)
    
    const onAdd=(cantidad)=>{
        if(cantidad>0){
        alert("Has añadido "+cantidad+" elementos al carrito")
        setCantidad(cantidad)
        test.addToCart(items, cantidad)
        }
    }
    return(
        <div className="itemDetail">
            <div className="itemIMG">
                <p><img src={items.img} alt={items.nombre}/></p>
                <p>{items.nombre}</p>
                <p>{items.precio}</p>
            </div>
            <div className="itemDesc">
                <p>{items.description}</p>
                <div className="itemBuy">
                {
                    cantidad===0
                    ?<div><p style={{"fontWeight":"bold"}}>Stock={items.stock}</p>
                    <ItemCount onAdd={onAdd} initial={0} stock={items.stock} cantidad={cantidad}/></div>
                    :<Link to="/Cart"><button className="buttonCart">Checkout</button></Link>
                }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail