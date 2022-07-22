import React from "react";
import {Link} from "react-router-dom"
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
            <p><Link to={"item/"+item.id} className="itemID">Detalles</Link></p>
            </div>)
    }
    </> 
    )
}

export default ItemList