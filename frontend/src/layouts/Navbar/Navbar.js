import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import NavItem from './NavItem';

const Navbar = () => {

    const [active, setActive] = useState("Home");

    const handleClickLink = (e) => {
        e.preventDefault();
        setActive(e.target.name);
    }

    return (
        <div className="navbar-area">
            <nav className="navbar navbar-expand-lg container navbar-light bg-light p-0">

                <Link className="navbar-brand" to="/">HRMS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <NavItem name="Home" active={active} onClick={handleClickLink} />
                        <NavItem name="Deneme" active={active} onClick={handleClickLink} />
                        <NavItem name="Profile" active={active} onClick={handleClickLink} />
                        <NavItem name="Akış" active={active} onClick={handleClickLink} />

                    </ul>
                    <div className="ms-5">
                        <Link className="btn btn-secondary my-2 my-sm-0" to="/register">Kayıt Ol</Link>
                        <Link className="btn btn-primary my-2 my-sm-0 ms-2" to="/login" >Giriş Yap</Link>
                    </div>
                </div>
            </nav>

        </div>


    );
};

export default Navbar;