import React, { useState } from "react";


const lista=({producto})=>{
    return(
    <li>
        <p>{producto.nombre}</p>
        <p>{producto.precio}</p>
        <p>Stock={producto.stock}</p>
    </li>
        
     )
}

export default lista