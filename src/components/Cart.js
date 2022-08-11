import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import {Link} from "react-router-dom"
import { addDoc, collection, getFirestore, updateDoc, doc, increment, serverTimestamp } from "firebase/firestore";
import swal from "sweetalert2"

const Cart = () =>{
    const cart = useContext(CartContext)
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [phone, setPhone]=useState("")
    const [address, setAdress]=useState("")


    let order={
        buyer:{
            name: {name},
            email:{email},
            phone:{phone},
            address:{address}
        },
        date: serverTimestamp(),
        items:cart.cartValue.map(products => ({id: products.id, nombre:products.nombre, price:products.precio, quantity:products.cantidad})) ,
        total: (cart.totalPrice()*1.21).toFixed(2)
    }
    

    const handleClick=(e)=>{
        e.preventDefault();
        const db=getFirestore();
        const orderCollection=collection(db, "order")
        addDoc(orderCollection, order)
        .then(({id})=>swal.fire({
                title:"Tu compra fue realizada!",
                text:`Tu orden de compra es ${id}`,
                icon:"success",
                confirmButtonText:"Aceptar",
                confirmButtonColor:"#2a56b5"
            },
        cart.clearOrder()
        ))
        cart.cartValue.forEach(async(item)=>{
            const itemRef=doc(db,"products",item.id)
            await updateDoc(itemRef, {
                stock:increment(-item.cantidad)
            })
        })
    }

    return(
        <>
        <h1 className="section">Tu carrito</h1>
        {
            cart.cartValue.length>0 && cart.cartValue.map(item =>(
                <div className="center">
                <div className="listCart" key={item.nombre}>
                    <p className="listCartImg"><img src={item.img} alt={item.nombre} className="imgSize"/></p>
                    <div className="listCartNP">
                        <p>{item.nombre}</p>
                    </div>
                    <div className="listCartCant">
                        <p>{item.cantidad} Item / {item.precio} Cada uno</p>
                        <p>{parseInt(item.precio)*parseInt(item.cantidad)}USD$</p>
                    </div>
                    <p><button onClick={()=>cart.removeItem(item.id)} className="buttonCart">Eliminar</button></p>
                </div>
                </div>
            ))
        }
        {
            cart.cartValue.length>0?<div>
                <div className="total">
                    <p>Subtotal: {cart.totalPrice()}USD$</p>
                    <p>IVA 21%: {(cart.totalPrice()*0.21).toFixed(2)}USD$</p>
                    <p style={{"fontWeight":"bold"}}>Total: {(cart.totalPrice()+(cart.totalPrice()*0.21)).toFixed(2)}USD$</p>
                </div>
                <form onSubmit={handleClick}>
                <div className="center">
                    <div className="form">
                        <p className="formP"style={{"fontWeight":"bold"}}>Por favor, ingresa tus datos</p>
                        <p><input  className="input" type="text" placeholder="Nombre" onChange={(e)=>{setName(e.target.value)}} required/></p>
                        <p><input  className="input" type="text" placeholder="E-Mail" onChange={(e)=>{setEmail(e.target.value)}} required/></p>
                        <p><input  className="input" type="text" placeholder="Dirección" onChange={(e)=>{setAdress(e.target.value)}} required/></p>
                        <p><input  className="input" type="text" placeholder="Telefono" onChange={(e)=>{setPhone(e.target.value)}}></input></p>
                    </div>
                </div>
                <div className="center">
                    <p><button type="submit" className="buttonCart">Terminar Compra</button></p>
                    <p><button type="button" onClick={()=> cart.clear()} className="buttonCart">Borrar Carrito</button></p>
                </div>
                </form>
            </div>
            :<div className="section">
                <p className="center">Tu carrito está vacio</p>
                <p><Link to="/"><button className="buttonCart">Ir a la tienda</button></Link></p>
            </div>
        }
        
        </>
    )
}

export default Cart