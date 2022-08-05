import React, {useState, useEffect} from "react";
import {useParams} from "react-router"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query,where } from "firebase/firestore";

const ItemListContainer =()=>{
    const [productList, setProductList]= useState([])
    const {id} = useParams()
    useEffect(()=>{
            const querydb = getFirestore();
            const queryCollect= collection(querydb, "products");
            if(id){
                const queryFilter=query(queryCollect,where("category","==",id))
                getDocs(queryFilter)
                    .then(res=>setProductList(res.docs.map(product => ({id: product.id, ...product.data()}))))
            }
            else{
                getDocs(queryCollect)
                    .then(res=>setProductList(res.docs.map(product => ({id: product.id, ...product.data()}))))
            }
    },[id])

    return(
        <>
        <div className="section lista">
            <ItemList items={productList}/>
        </div>
        </>
    )
}

export default ItemListContainer