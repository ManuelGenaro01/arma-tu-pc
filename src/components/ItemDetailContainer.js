import React, {useState, useEffect} from "react";
import customFetch from "../utils/customFetch"
import ItemDetail from "./ItemDetail"
const {products} =require("../utils/Data")

const ItemDetailContainer =()=>{
    const [productList, setProductList]= useState([])
    useEffect(()=>{
        customFetch(2000, products[1])
        .then(result=>setProductList(result))
        .catch(err=>console.log(err))
    })
    return(
        <>
        <div className="section">
            <ItemDetail items={productList}/>
        </div>
        </>
    )
}

export default ItemDetailContainer