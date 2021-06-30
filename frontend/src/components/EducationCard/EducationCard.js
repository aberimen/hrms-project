import React, { useState } from 'react';
import EditButton from '../EditButton';
import ResumeEducationModalForm from '../ResumeSections/ModalForms/ResumeEducationModalForm';
import './educationCard.scss';

const EducationCard = ({ education }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleClickEdit = () => {
        setModalVisible(true);
    };

    const {id, university, educationLevel, schoolName, educationType, stillStudying, startDate, graduationDate, educationLanguage, department } = education;

    return (
        <div className="education">
            <div className="edit-button">
                <EditButton onClick={handleClickEdit} />

            </div>
            <div className="row">
                <div className="col-3">

                    <div className="dates">
                        <div className="education-level">
                            {educationLevel}
                        </div>
                        <span className="dates-wrapper">
                            <span className="start-date">
                                {new Date(startDate).getFullYear()}
                            </span>

                            <span className="end-date">
                                {!stillStudying ?

                                    new Date(graduationDate).getFullYear()
                                    : 'Devam Ediyor'
                                }
                            </span>
                        </span>
                    </div>

                </div>
                <div className="col-9">


                    <div className="row">


                        <div className="col-3">
                            <div className="fw-bold">Üniversite</div>
                            <div>{university.name}</div>
                        </div>
                        <div className="col-3">
                            <div className="fw-bold">Bölüm</div>
                            <div>{department.departmentName}</div>
                        </div>
                        <div className="col-3">
                            <div className="fw-bold">Öğretim Tipi</div>
                            <div>{educationType}</div>
                        </div>
                        <div className="col-3">
                            <div className="fw-bold">Öğretim Dili</div>
                            <div>{educationLanguage.languageName}</div>
                        </div>

                    </div>
                </div>
            </div>

            <ResumeEducationModalForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                previousValues={{
                    id,
                    educationLevel,
                    schoolName,
                    graduationDate,
                    educationType,
                    startDate,
                    stillStudying,
                    universityId: university && university.id,
                    departmentId: department && department.id,
                    educationLanguageId: educationLanguage && educationLanguage.id,
                }}
                isUpdateMode="true"
            />
        </div>
    );
};

export default EducationCard;