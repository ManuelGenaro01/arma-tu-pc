import {createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cartValue, setCartValue] = useState([])
    const addToCart = (item, nuevaCantidad) =>{
        const {cantidad = 0}=cartValue.find(product => product.id === item.id) || [];
        const nuevoCart = cartValue.filter(prod => prod.id!==item.id)
        setCartValue([...nuevoCart, {
            id: item.id,
            nombre: item.nombre,
            img: item.img,
            precio: item.precio,
            cantidad: cantidad + nuevaCantidad
        }])
    }

    const isInCart =(id)=>{
        return cartValue.find(product => product.id === id) ? true:false;
    }

    const removeItem =(id)=>{
        let newCartValue=cartValue.filter(item => item.id !== id)
        setCartValue(newCartValue)
    }
    const clear =()=>{
        setCartValue([])
    }
    const totalPrice =()=>{
        return cartValue.reduce((prev, act)=>prev+act.cantidad*parseInt(act.precio), 0)
    }
    const totalProductos=()=>{
        return cartValue.reduce((prev, prodActual)=>prev+prodActual.cantidad,0)
    }
    return(
        <CartContext.Provider value={{cartValue, addToCart, removeItem, clear, isInCart, totalPrice, totalProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider