import React from "react";
import ItemCount from "./ItemCount"

const ProductosEjemplo =(props)=>{
    return(
        <>
        <div className="section">
        <ul>
            <li>
                <p><a href="#">{props.nombre}</a></p>
                <p>{props.precio}</p>
                <p>Stock= {props.stock}</p>
                <p className="button"><ItemCount stock={props.stock} inicioStock={1}/></p>
            </li>
        </ul>
        </div>
        </>
    )
}

export default ProductosEjemplo