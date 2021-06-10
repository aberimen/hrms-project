import React from 'react';

const NavItem = ({ name, active, onClick }) => {

    const isActive = active === name;

    return (
        <li className="nav-item">
            <a className={`nav-link ${isActive && 'actived'}`} name={name} onClick={onClick} href="#">{name}</a>
        </li>
    );
};

export default NavItem;