import React, {useState} from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import {products} from "./Data"

const ItemListContainer =()=>{
    const [productList, setProductList]= useState([])
    const onAdd=(cantidad)=>{
        alert("Has añadido "+cantidad+" elementos al carrito")
    }
    const Esperar = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        }, 2000)
    }
    )
    Esperar.then((res)=>{
        setProductList(res)
    })
    return(
        <>
        <div className="section">
        <ul>
            <ItemList items={productList}/>
            <ItemCount onAdd={onAdd} initial={1} stock={9}/>
        </ul>
        </div>
        </>
    )
}

export default ItemListContainer