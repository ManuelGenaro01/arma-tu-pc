import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"
import { CartContext } from "./CartContext";

const ItemDetail=({items})=>{
    const [cantidad, setCantidad]= useState(0)
    const test = useContext(CartContext)
    const onAdd=(cantidad)=>{
        if(cantidad>0){
        setCantidad(cantidad)
        test.addToCart(items, cantidad)
        }
        toast(`Se agregaron ${cantidad} elementos al carrito`,{
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        })
    }
    return(
        <div className="center">
        <div className="itemDetail">
            <div className="itemIMG">
                <p><img src={items.img} alt={items.nombre} className="imgSize"/></p>
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
        </div>
    )
}

export default ItemDetail