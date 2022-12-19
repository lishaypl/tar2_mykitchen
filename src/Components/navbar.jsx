import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import pic from '../images/logo.png';

export default function Nav(){
    return( 
        <Navbar className="navbar">
            <Navbar.Brand>
            <img
                src={pic}
                width="50"
                heaight="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        </Navbar>
    )
}
