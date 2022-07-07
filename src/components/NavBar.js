import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div className="navStyle">
            <div className="navBar">
                <p><h3 className="logo">Todo Computación!</h3></p>
                <p><a href="#" className="a">Procesadores</a></p>
                <p><a href="#" className="a">Motherboards</a></p>
                <p><a href="#" className="a">Memorias Ram</a></p>
                <p><a href="#" className="a">GPU</a></p>
                <p><a href="#" className="a cart"><CartWidget /></a></p>
            </div>
        </div>
        
    )
    
};
export default NavBar;
