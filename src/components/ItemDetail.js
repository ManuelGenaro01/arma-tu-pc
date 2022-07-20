import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount"

const ItemDetail=({items})=>{
    const onAdd=(cantidad)=>{
        alert("Has añadido "+cantidad+" elementos al carrito")
    }
    return(
    <>
        <Item producto={items}/>
        <ItemCount onAdd={onAdd} initial={1} stock={items.stock}/>
    </> 
    )
}

export default ItemDetail