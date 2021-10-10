import React, { useState } from 'react';
import EducationCard from '../EducationCard/EducationCard';
import ResumeSection from '../ResumeSection/ResumeSection';
import ResumeEducationModalForm from './ModalForms/ResumeEducationModalForm';


const ResumeEducationDetailsSection = ({ resume, previewMod }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAdd = () => {
        setModalVisible(true);
    };

    return (
        <ResumeSection className="education-details-section" title="Eğitim Bilgisi" >
            {resume.educationDetails.map(education =>
                <EducationCard
                    education={education}
                    previewMod={previewMod}
                />
            )}

            {!previewMod && <ResumeSection.Footer onClickAdd={handleClickAdd} />}


            {/* modal form for create new*/}

            <ResumeEducationModalForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

        </ResumeSection>

    );
};

export default ResumeEducationDetailsSection;