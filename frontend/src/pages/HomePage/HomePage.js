import React from 'react';
import onlineResume from '../../assets/undraw_online_resume.svg';
import './HomePage.scss';
import { FaBeer, FaBriefcase, FaClipboardList, FaRegAddressCard, FaUserCheck } from 'react-icons/fa';
import { MdAssignmentTurnedIn } from "react-icons/md"

const HomePage = () => {

    return (
        <>
            <section>
                <div className="container">
                    <div className="pt-5">
                        <div className="row">
                            <div className="col-lg-6 p-5">
                                <h1 className="fw-bold" style={{ marginTop: '5rem' }}>
                                    HRMS, Hemen iş Aramaya Başla
                            </h1>
                            </div>

                            <div className="col-lg-6 bg-white" style={{ borderTopLeftRadius: '5rem', borderBottomRightRadius: '5rem' }}>
                                <img className="mt-2 d-md-none d-none d-lg-block" src={onlineResume} alt="online resume svg" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="apply-steps">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div>
                                <FaUserCheck className="large-icon" />
                                <span className="ms-3"> Hemen Kayıt Ol</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <FaRegAddressCard className="large-icon" />
                                <span className="ms-3"> CV'ni Ekle</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <FaBriefcase className="large-icon" />
                                <span className="ms-3">Hayalindeki İşi Bul</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

           


        </>
    );
};

export default HomePage;