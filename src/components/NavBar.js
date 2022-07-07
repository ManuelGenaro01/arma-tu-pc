import React from "react";

const NavBar = () => {
    return (
        <div className="navStyle">
            <ul className="navBar">
                <li><h3 className="logo">Todo Computación!</h3></li>
                <li><a href="#" className="a">Procesadores</a></li>
                <li><a href="#" className="a">Motherboards</a></li>
                <li><a href="#" className="a">Memorias Ram</a></li>
                <li><a href="#" className="a">GPU</a></li>
            </ul>
        </div>
    )
};
export default NavBar
