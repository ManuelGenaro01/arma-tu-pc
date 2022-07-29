import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () =>{
    const test = useContext(CartContext)
    console.log(test.cartValue)
    return(
        <>
        <h1>Tu carrito</h1>
        {
            test.cartValue.length>0 && test.cartValue.map(item =>(
                <div className="listCart">
                    <p className="cartIMG"><img src={item.img} alt={item.nombre}/></p>
                    <p>{item.nombre}</p>
                    <p>{item.precio}</p>
                    <p>{item.cantidad}</p>
                    <p><button onClick={()=>test.removeItem(item.id)}>Eliminar</button></p>
                </div>
            ))
        }
        <p><button onClick={()=> test.clear()} className="buttonCart">Borrar Carrito</button></p>
        </>
    )
}

export default Cart