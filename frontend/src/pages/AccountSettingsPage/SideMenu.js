import React from 'react';
import { AiFillSetting, AiOutlineFileSearch, AiOutlineUser } from 'react-icons/ai';
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
                Icon={AiOutlineUser}
                onClick={handleClick}
            />

            <SideMenuItem
                text="Deneme 1"
                name="deneme"
                active={selectedMenuItem === 'deneme'}
                Icon={AiOutlineFileSearch}
                onClick={handleClick}
            />

            <SideMenuItem
                text="Deneme 2"
                name="deneme2"
                active={selectedMenuItem === 'deneme2'}
                Icon={AiFillSetting}
                onClick={handleClick}
            />
        </div >
    );
};

export default SideMenu;