import React from "react";

const ProductosEjemplo =(props)=>{
    return(
        <>
        <div className="section">
        <ul>
            <li>
                <p><a href="#">{props.nombre}</a></p>
                <p>{props.precio}</p>
            </li>
        </ul>
        </div>
        </>
    )
}

export default ProductosEjemplo