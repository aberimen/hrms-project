import React, { useState } from 'react';
import ResumeSection from '../ResumeSection/ResumeSection';
import ResumeTechnicalSkillModalForm from './ModalForms/ResumeTechnicalSkillModalForm';

const ResumeTechnicalSkillsSection = ({ resume, previewMod }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAdd = () => {
        setModalVisible(true);
    };

    return (
        <ResumeSection className="technical-skills" title="Yekinlikler" >

            <div className="d-flex p-3">
                {resume.technicalSkills?.map(tech =>
                    <div className="m-1 bg-light px-2 rounded"> {tech.techStack.name} </div>
                )}
            </div>

            {!previewMod && <ResumeSection.Footer onClickAdd={handleClickAdd} />}

            {/* modal form for create new*/}

            <ResumeTechnicalSkillModalForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

        </ResumeSection>
    );
};

export default ResumeTechnicalSkillsSection;