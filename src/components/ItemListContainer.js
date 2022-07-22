import React, {useState, useEffect} from "react";
import {useParams} from "react-router"
import customFetch from "../utils/customFetch"
import ItemList from "./ItemList"
const {products} =require("../utils/Data")

const ItemListContainer =()=>{
    const [productList, setProductList]= useState([])
    const {id} = useParams()
    useEffect(()=>{
        if(id===undefined){
            customFetch(0, products)
            .then(result=>setProductList(result))
            .catch(err=>console.log(err))
        }
        else{
            customFetch(0, products.filter(item => item.category === id))
            .then(result=>setProductList(result))
            .catch(err=>console.log(err))
        }
    })

    return(
        <>
        <div className="section lista">
            <ItemList items={productList}/>
        </div>
        </>
    )
}

export default ItemListContainer