import React, { useContext } from "react";
import logo from "../cartIc.png"
import { CartContext } from "./CartContext";

const cart =()=>{
    return(
        <>
        <img src={logo} height="21 px" alt="cart"/>
        <span>{""||""}</span>
        </>
    )
}

export default cart