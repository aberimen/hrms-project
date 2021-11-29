import React, { useState } from 'react';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import ResumeSection from '../ResumeSection/ResumeSection';
import ResumeExperienceModalForm from './ModalForms/ResumeExperienceModalForm';


const ResumeExperiencesSection = ({ resume, previewMod }) => {

    console.log(resume);
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAdd = () => {
        setModalVisible(true);
    };

    return (
        <ResumeSection className="experiences-details-section" title="Deneyim Bilgisi" >
            {resume.experiences && resume.experiences.map(exp =>
                <ExperienceCard 
                    {...exp}
                />
            )}

            {!previewMod && <ResumeSection.Footer onClickAdd={handleClickAdd} />}

            {/* modal form for create new*/}

            <ResumeExperienceModalForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

        </ResumeSection>

    );
};

export default ResumeExperiencesSection;