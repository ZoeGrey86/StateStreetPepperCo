import React from "react";
import {NavLink, Link} from "react-router-dom";
import './NavBar.css';

export const NavBar = ()=>{
return(<nav>
    <Link to="/" className="title">Home</Link>
    <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="https://www.instagram.com/statestreetpepperco/">Instagram</NavLink></li>
    </ul>
</nav>)
}