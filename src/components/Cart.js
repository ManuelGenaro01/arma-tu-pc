import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () =>{
    const test = useContext(CartContext)
    return(
        <>
        <h1 className="section">Tu carrito</h1>
        {
            test.cartValue.length>0 && test.cartValue.map(item =>(
                <div className="listCart">
                    <p className="listCartImg"><img src={item.img} alt={item.nombre}/></p>
                    <div className="listCartNP">
                        <p>{item.nombre}</p>
                        <p>{item.precio}</p>
                    </div>
                    <p className="listCartCant">{item.cantidad}</p>
                    <p><button onClick={()=>test.removeItem(item.id)} className="buttonCart">Eliminar</button></p>
                </div>
            ))
        }
        <p className="center"><button onClick={()=> test.clear()} className="buttonCart">Borrar Carrito</button></p>
        </>
    )
}

export default Cart