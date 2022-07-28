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
                <p>Stock={props.stock}</p>
            </div>
        </Link>
        </>
    )
}
export default List