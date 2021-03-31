import React from 'react';
import logo from '../../Image/Logo2.JPG'
import './Header.css'
import '../Asset/bootstrap.min.css'

const Header = () => {
    return (
        <div className="header" >
            <div className="header-logo">
            <img src={logo} alt="" />
            </div>
            <div>
            <nav className="navbar navbar-dark bg-primary">
                <a href="/Home">Home</a>
                <a href="/SingUp">Sing Up</a>
                <a href="/LogIn">Log In</a>
            </nav>
            </div>
            
        </div>

    );
};

export default Header;