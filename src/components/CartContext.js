import {createContext, useState } from "react";
import {toast} from "react-toastify"
import swal from "sweetalert2"

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
        toast(`El elemento fue eliminado`,{
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,})
    }
    const clearOrder=()=>{
        setCartValue([])
    }
    const borrarCarro =()=>{
        setCartValue([])
    }
    const clear=()=>{
        swal.fire({
            title: "Estas seguro que quieres borrar el carro?",
            icon: "warning",
            showCancelButton:true,
            confirmButtonText:"Confirmar",
            cancelButtonText:"Cancelar",
            confirmButtonColor:"#2a56b5"
          })
          .then((willDelete) => {
            if (willDelete.isConfirmed) {
                borrarCarro()
              swal.fire({
                title:"Tu carrito fue borrado con exito",
                icon: "success",
                confirmButtonColor:"#2a56b5"
              });
            } else {
              swal.fire("Tu carrito no ha sido borrado");
            }
          })
    }
    
    const totalPrice =()=>{
        return cartValue.reduce((prev, act)=>prev+act.cantidad*parseInt(act.precio), 0)
    }
    const totalProductos=()=>{
        return cartValue.reduce((prev, prodActual)=>prev+prodActual.cantidad,0)
    }
    return(
        <CartContext.Provider value={{cartValue, addToCart, removeItem, clear, isInCart, totalPrice, totalProductos, clearOrder}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider