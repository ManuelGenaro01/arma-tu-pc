import React from "react";
import {Link} from "react-router-dom"

const List = (props) => {
    if(props.stock!==0){
    return(
        <>  
        <div className="item">
        <Link to={`/item/${props.id}`} className="itemID">
            <div className="itemList">
                <p><img src={props.img} alt={props.nombre} className="imgSize" /></p>
                <p>{props.nombre}</p>
                <p>{props.precio}</p>
                <p style={{"fontWeight":"bold"}}>Stock={props.stock}</p>
            </div>
        </Link>
        </div>
        </>
    )
    }
}
export default List