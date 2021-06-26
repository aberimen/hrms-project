import React, { useState } from 'react';
import { FaAddressCard, FaAlipay, FaInstagram, FaStreetView } from 'react-icons/fa';
import SideMenuItem from '../../components/SideMenuItem/SideMenuItem';
import './SideMenu.scss';


const SideMenu = ({ selectedMenuItem, setSelectedMenuItem }) => {

    const handleClick = (e) => {
        e.preventDefault();
        setSelectedMenuItem(e.currentTarget.name);
    };

    return (
        <div className="side-menu">
            <SideMenuItem
                text="Bilgilerim"
                name="account-details"
                active={selectedMenuItem === 'account-details'}
                Icon={FaStreetView}
                onClick={handleClick}
            />

            <SideMenuItem
                text="Bilgilerim"
                name="deneme"
                active={selectedMenuItem === 'deneme'}
                Icon={FaInstagram}
                onClick={handleClick}
            />

            <SideMenuItem
                text="Bilgilerim"
                name="deneme2"
                active={selectedMenuItem === 'deneme2'}
                Icon={FaAddressCard}
                onClick={handleClick}
            />
        </div >
    );
};

export default SideMenu;