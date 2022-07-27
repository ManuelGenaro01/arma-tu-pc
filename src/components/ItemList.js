import React from "react";
import {Link} from "react-router-dom"

const ItemList=({items})=>{
    return(
        
    <>{
        items.map(item=><div className="item">
            <p>{item.nombre}</p>
            <p>{item.precio}</p>
            <p>Stock={item.stock}</p>
            <p><Link to={"item/"+item.id} className="itemID"><button className="buttonCart">Detalles</button></Link></p>
            </div>)
    }
    </> 
    )
}

export default ItemList