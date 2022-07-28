import React, { useState } from "react";
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"

const ItemDetail=({items})=>{
    const [cantidad, setCantidad]= useState(0)
    
    const onAdd=(cantidad)=>{
        if(cantidad>0){
        alert("Has añadido "+cantidad+" elementos al carrito")
        setCantidad(cantidad)
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
                    ?<div><p style={{"fontWeight":"bold"}} className>Stock={items.stock}</p>
                    <ItemCount onAdd={onAdd} initial={0} stock={items.stock} cantidad={cantidad}/></div>
                    :<Link to="/Cart"><button className="buttonCart">Checkout</button></Link>
                }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail