import React, {useState, useEffect} from "react";
import customFetch from "../utils/customFetch"
import ItemList from "./ItemList"
const {products} =require("../utils/Data")

const ItemListContainer =()=>{
    const [productList, setProductList]= useState([])
    useEffect(()=>{
        customFetch(0, products[0])
        .then(result=>setProductList(result))
        .catch(err=>console.log(err))
    })
    return(
        <>
        <div className="section">
            <ItemList items={productList}/>
        </div>
        </>
    )
}

export default ItemListContainer