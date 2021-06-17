import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ name, active, onClick, to }) => {

    const isActive = active === name;

    return (
        <li className="nav-item" onClick={onClick}>
            <Link className={`nav-link ${isActive && 'actived'}`} name={name} to={to}>{name}</Link>
        </li>
    );
};

export default NavItem;