import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import './ResumeSection.scss';

const ResumeSection = ({ className, title, onClickAdd, children }) => {
    return (
        <section className={className}>
            <div className="header">
                <div className="title">
                    <h5>{title}</h5>
                </div>
                <button className="btn p-0 text-primary d-flex align-items-center" onClick={onClickAdd}>
                    <FaPlusCircle style={{ color: "inherit" }} />
                    <span className="ms-2"> Yeni Ekle </span>
                </button>
            </div>

            {children}
        </section>
    );
};

export default ResumeSection;