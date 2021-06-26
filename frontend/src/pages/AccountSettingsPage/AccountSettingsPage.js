import React, { useState } from 'react';
import SideMenu from './SideMenu';
import './AccountSettingsPage.scss';
import Input from '../../components/Input';
import MyDetailsMenu from './MyDetailsMenu';

const AccountSettingsPage = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('account-details');

    const panels = {
        'account-details': <MyDetailsMenu />,
        'deneme': <Menu2 />,
        'deneme2': <Menu3 />,
    }
    return (
        <div className="bg-light" style={{ minHeight: '90vh', width: '100%' , paddingBottom:'2rem'}}>
            <div className="container">

                <div className="row pt-5">
                    <h3 className="fw-bold mb-4"> Hesabım </h3>
                    <div className="col-2">
                        <SideMenu selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />

                    </div>

                    <div className="col-10">
                        <div className="menu-panel">
                            {panels[selectedMenuItem]}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};



const Menu1 = () => {
    return (
        <div>
            <Input label="deneme"/>
            <Input label="deneme"/>
            <Input label="deneme"/>
            <Input label="deneme"/>
        </div>
    );
};


const Menu2 = () => {
    return (
        <div>
            menu2
        </div>
    );
};


const Menu3 = () => {
    return (
        <div>
            menu3
        </div>
    );
};

export default AccountSettingsPage;