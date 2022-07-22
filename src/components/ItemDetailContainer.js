import React, {useState, useEffect} from "react";
import customFetch from "../utils/customFetch"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router"
const {products} =require("../utils/Data")

const ItemDetailContainer =(items)=>{
    const {id} = useParams()
    return(
        <>
        <div className="section lista">
            <ItemDetail items={products[id-1]} />
        </div>
        </>
    )
}

export default ItemDetailContainer