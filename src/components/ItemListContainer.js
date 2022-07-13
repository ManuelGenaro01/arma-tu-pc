import React, { useState } from "react";
import ItemCount from "./ItemCount"

const ProductosEjemplo =(props)=>{

    const onAdd=(param)=>{
        alert("Has añadido "+param+" elementos al carrito")
    }

    return(
        <>
        <div className="section">
        <ul>
            <li>
                <p><a href="#">{props.nombre}</a></p>
                <p>{props.precio}</p>
                <p>Stock= {props.stock}</p>
                <p className="button">
                    <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>
                </p>
                <p className="buttonCart">
                    <button onClick={()=>onAdd(props.cantidad)}>Añadir al Carrito</button>
                </p>
            </li>
        </ul>
        </div>
        </>
    )
}

export default ProductosEjemplo