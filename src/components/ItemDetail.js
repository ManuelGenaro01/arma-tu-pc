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
            <p>{items.nombre}</p>
            <p>{items.precio}</p>
            <p>{items.description}</p>
            <p>Stock={items.stock}</p>
            {
                cantidad===0
                ?<ItemCount onAdd={onAdd} initial={0} stock={items.stock} cantidad={cantidad}/>
                :<Link to="/Cart"><button className="buttonCart">Checkout</button></Link>
            }
        </div>
    )
}

export default ItemDetail