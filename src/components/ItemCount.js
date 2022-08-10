import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

const Cart =({initial, stock, onAdd})=>{
    const [cantidad, setRates]= useState(0)
    const Aumentar =()=>{
        if(cantidad<stock){
        setRates(cantidad+1)
        }
    }
    const Disminuir =()=>{
        if(cantidad>initial){
        setRates(cantidad-1)
        }
    }
    return(
        <div>
            <div className="button">
                <button onClick={Disminuir} className="addSub">-</button>
                <p className="cantidad">{cantidad}</p>
                <button onClick={Aumentar} className="addSub">+</button>
            </div>
                <p>
                    <button onClick={()=>onAdd(cantidad)} className="buttonCart">Añadir al Carrito</button>
                </p>
        </div>
    )
}

export default Cart