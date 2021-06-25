import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import './ResumeSection.scss';

export const Footer = ({ onClickAdd }) => {
    return (
        <div className="resume-section-footer">
            <button className="btn p-0 text-primary d-flex align-items-center mx-auto" onClick={onClickAdd}>
                <FaPlusCircle style={{ color: "inherit" }} />
                <span className="ms-2"> Yeni Ekle </span>
            </button>
        </div>
    );
};

const ResumeSection = ({ className, title, children }) => {
    return (
        <section className={className}>
            <div className="header">
                <div className="title">
                    <h5>{title}</h5>
                </div>
            </div>

            {children}
        </section>
    );
};

ResumeSection.Footer = Footer;
export default ResumeSection;