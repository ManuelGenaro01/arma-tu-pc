import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router"
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer =(items)=>{
    const [data, setData]=useState({})
    const {id} = useParams()
        useEffect(()=>{
            const querydb=getFirestore();
            const queryDoc=doc(querydb,"products",id)
            getDoc(queryDoc)
            .then(res=>setData({id: res.id, ...res.data()}))
        }, [id])
    return(
        <ItemDetail items={data} />
    )
}

export default ItemDetailContainer