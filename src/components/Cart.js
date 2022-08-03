import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () =>{
    const { cartValue, totalPrice, removeItem, clear } = useContext(CartContext)
    return(
        <>
        <h1 className="section">Tu carrito</h1>
        {
            cartValue.length>0 && cartValue.map(item =>(
                <div className="listCart" key={item.nombre}>
                    <p className="listCartImg"><img src={item.img} alt={item.nombre}/></p>
                    <div className="listCartNP">
                        <p>{item.nombre}</p>
                    </div>
                    <div className="listCartCant">
                        <p>{item.cantidad} Item / {item.precio} Cada uno</p>
                        <p>{parseInt(item.precio)*parseInt(item.cantidad)}USD$</p>
                    </div>
                    <p><button onClick={()=>removeItem(item.id)} className="buttonCart">Eliminar</button></p>
                </div>
            ))
        }
        {
            cartValue.length>0?<div>
                <div className="total">
                    <p>Subtotal: {totalPrice()}USD$</p>
                    <p>IVA 21%: {(totalPrice()*0.21).toFixed(2)}USD$</p>
                    <p style={{"fontWeight":"bold"}}>Total: {(totalPrice()+(totalPrice()*0.21)).toFixed(2)}USD$</p>
                </div>
                <div className="center">
                    <p><button className="buttonCart">Terminar Compra</button></p>
                    <p><button onClick={()=> clear()} className="buttonCart">Borrar Carrito</button></p>
                </div>
            </div>
            :<p className="section">Tu carrito está vacio</p>
        }
        
        </>
    )
}

export default Cart