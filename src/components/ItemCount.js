import React, { useState } from "react";

const Cart =(props)=>{
    const [cantidad, setRates]=useState(props.inicioStock)

    const Aumentar =()=>{
        if(cantidad<props.stock){
        setRates(cantidad+1)
        }
    }
    const Disminuir =()=>{
        if(cantidad>props.inicioStock){
        setRates(cantidad-1)
        }
    }

    const onAdd=()=>{
        alert("Has añadido "+cantidad+" elementos al carrito")
    }
    return(
        <div>
            <div className="button">
                <button onClick={Disminuir}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button onClick={Aumentar}>+</button>
            </div>
            <div className="buttonCart">
                <button onClick={onAdd}>Añadir al Carrito</button>
            </div>
        </div>
    )
}

export default Cart