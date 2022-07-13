import React, { useState } from "react";
import ItemListContainer from "./ItemListContainer"

const Cart =(props)=>{
    const [cantidad, setRates]=useState(props.initial)
    const Aumentar =()=>{
        if(cantidad<props.stock){
        setRates(cantidad+1)
        }
    }
    const Disminuir =()=>{
        if(cantidad>props.initial){
        setRates(cantidad-1)
        }
    }

    return(
        <div>
            <div className="button">
                <button onClick={Disminuir}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button onClick={Aumentar}>+</button>
            </div>
        </div>
    )
}

export default Cart