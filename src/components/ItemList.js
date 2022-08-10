import React from "react";
import List from "./List"

const ItemList=({items})=>{
    if(items.stock!==0){
    return(
        
    <>{
        items.map(item=>
            <List id={item.id} nombre={item.nombre} precio={item.precio} stock={item.stock} img={item.img}/>)
    }
    </> 
    )
}
}

export default ItemList