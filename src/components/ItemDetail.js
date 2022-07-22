import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail=({items})=>{
    const onAdd=(cantidad)=>{
        alert("Has añadido "+cantidad+" elementos al carrito")
    }
    return(
    <>
        <p>{items.nombre}</p>
        <p>{items.precio}</p>
        <p>{items.description}</p>
        <p>Stock={items.stock}</p>
        <ItemCount onAdd={onAdd} initial={1} stock={items.stock}/>
    </> 
    )
}

export default ItemDetail