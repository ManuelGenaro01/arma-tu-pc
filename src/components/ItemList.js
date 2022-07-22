import React from "react";
import ItemCount from "./ItemCount"

const ItemList=({items})=>{
    
    const onAdd=(cantidad)=>{
        alert("Has añadido "+cantidad+" elementos al carrito")
    }
    return(
    <>{
        items.map(item=><div className="item">
            <p>{item.nombre}</p>
            <p>{item.precio}</p>
            <p>Stock={item.stock}</p>
            <ItemCount onAdd={onAdd} initial={1} stock={item.stock}/></div>)
    }
    </> 
    )
}

export default ItemList