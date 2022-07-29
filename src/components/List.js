import React from "react";
import {Link} from "react-router-dom"

const List = (props) => {
    return(
        <>  
        <Link to={`/item/${props.id}`} className="itemID">
            <div className="itemList">
                <p><img src={props.img} alt={props.nombre} /></p>
                <p>{props.nombre}</p>
                <p>{props.precio}</p>
                <p style={{"fontWeight":"bold"}}>Stock={props.stock}</p>
            </div>
        </Link>
        </>
    )
}
export default List