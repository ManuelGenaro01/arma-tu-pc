import {createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [cartValue, setCartValue] = useState([])

    const addToCart = (item, cantidad) =>{
        setCartValue([...cartValue, {
            id: item.id,
            nombre: item.nombre,
            img: item.img,
            precio: item.precio,
            cantidad: cantidad
        }])
    }

    const removeItem =(id)=>{
        let newCartValue=cartValue.filter(item => item.id !== id)
        setCartValue(newCartValue)
    }
    const clear =()=>{
        setCartValue([])
    }

    return(
        <CartContext.Provider value={{cartValue, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider