import React from "react";
import CartWidget from "./CartWidget";
import ProductosEjemplo from "./ItemListContainer"

function NavBar() {
    return (
        <div>
            <div className="navBar">
                <p><h3 className="logo">Todo Computación!</h3></p>
                <p><a href="#" className="a">Procesadores</a></p>
                <p><a href="#" className="a">Motherboards</a></p>
                <p><a href="#" className="a">Memorias Ram</a></p>
                <p><a href="#" className="a">GPU</a></p>
                <p><a href="#" className="a cart"><CartWidget /></a></p>
            </div>
            <div className="section">
                <h1>Bienvenido a Todo Computación!</h1>
                <p>Aquí podrás encontrar muchisimos componentes para tu pc a muy buenos precios!</p>
            </div>
            <hr />
            <ProductosEjemplo nombre="Ryzen 5 5600G" precio="250USD$"/>
            <hr />
                <ProductosEjemplo nombre="ASUS RTX 3060" precio="600USD$"/>
        </div>
        
        
    )
    
};
export default NavBar;
