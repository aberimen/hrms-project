import React, { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import EditButton from '../EditButton';
import ResumeExperienceModalForm from '../ResumeSections/ModalForms/ResumeExperienceModalForm';
import './ExperienceCard.scss';

const ExperienceCard = ({ companyName, previewMod, jobPosition = {}, stillWorking, startDate, endDate, }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleClickEdit = () => {
        setModalVisible(true);
    };

    return (
        <div className="experience-card">
            <div className="edit-button">
                {!previewMod && <EditButton onClick={handleClickEdit} />}

            </div>
            <div className="row">
                <div className="col-3">

                    <div className="experience-summary">
                        <div className="company-name d-flex align-items-center">
                            <FaBriefcase className="me-2" />
                            <span>{companyName}</span>
                        </div>
                        <span className="dates-wrapper">
                            <span className="start-date">
                                {new Date(startDate).getFullYear()}
                            </span>

                            <span className="end-date">
                                {!stillWorking ?

                                    new Date(endDate).getFullYear()
                                    : 'Devam Ediyor'
                                }
                            </span>
                        </span>
                    </div>

                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-3">
                            <div className="fw-bold">İş Pozisyonu</div>
                            <div>{jobPosition.positionName}</div>
                        </div>
                    </div>
                </div>
            </div>

            {modalVisible &&
                <ResumeExperienceModalForm
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    previousValues={{
                        companyName,
                        jobPositionId: jobPosition.id,
                        stillWorking: stillWorking ? true : false,
                        startDate,
                        endDate
                    }}
                    isUpdateMode="true"
                />}
        </div>
    );
};

export default ExperienceCard;