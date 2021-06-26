import React from 'react';
import './SideMenuItem.scss';

const SideMenuItem = ({ onClick, name, text, Icon, active }) => {
    return (
        <button className={`btn menu-button ${active ? 'active' : ''}`} name={name} onClick={onClick}>
            <Icon />
            <span>{text}</span>
        </button>


    );
};

export default SideMenuItem;