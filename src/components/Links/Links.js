import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css'

const Links = () => {
    const  activeStyle={
        fontWeight: "bold",
        color: "red"
      }
    return (
        <div className="space">
            <NavLink className="leftspace" activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink className="leftspace" activeStyle={activeStyle} to="/about">About Us</NavLink>
            <NavLink className="leftspace" activeStyle={activeStyle} to="/service">Service</NavLink>
            <NavLink className="leftspace" activeStyle={activeStyle} to="/signin">Sign In</NavLink>
        </div>
    );
};

export default Links;