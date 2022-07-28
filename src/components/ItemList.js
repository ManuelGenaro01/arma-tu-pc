import React from "react";
import List from "./List"

const ItemList=({items})=>{
    return(
        
    <>{
        items.map(item=><div className="item" key={item.id}>
            <List id={item.id} nombre={item.nombre} precio={item.precio} stock={item.stock} img={item.img}/>
            </div>)
    }
    </> 
    )
}

export default ItemList