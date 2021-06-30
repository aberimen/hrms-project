import React, { useState } from 'react';
import EditButton from '../EditButton';
import EducationCard from '../EducationCard/EducationCard';
import ResumeSection from '../ResumeSection/ResumeSection';
import ResumeEducationModalForm from './ModalForms/ResumeEducationModalForm';


const ResumeEducationDetailsSection = ({ resume }) => {

    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAdd = () => {
        setIsUpdateMode(false);
        setModalVisible(true);
    };

    return (
        <ResumeSection className="education-details-section" title="Eğitim Bilgisi" >
            {resume.educationDetails.map(education =>
                <EducationCard
                    education={education}
                />
            )}

            <ResumeSection.Footer onClickAdd={handleClickAdd} />


            {/* modal  form */}

            <ResumeEducationModalForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

        </ResumeSection>

    );
};

export default ResumeEducationDetailsSection;