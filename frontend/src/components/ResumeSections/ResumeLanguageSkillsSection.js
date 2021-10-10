import React, { useState } from 'react';
import LanguageSkill from '../LanguageSkill';
import ResumeSection from '../ResumeSection/ResumeSection';
import ResumeLanguageSkillModalForm from './ModalForms/ResumeLanguageSkillModalForm';

const ResumeLanguageSkillsSection = ({ resume = {}, previewMod }) => {

    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAdd = () => {
        setIsUpdateMode(false);
        setModalVisible(true);
    };

    return (
        <ResumeSection className="language-skills-section" title="Yabancı Dil" >
            {resume.languageSkills.map(l =>
                <LanguageSkill key={l.id} name={l.language.languageName} level={l.languageLevel} />
            )}

            {!previewMod && <ResumeSection.Footer onClickAdd={handleClickAdd} />}


            {/* modal  form */}

            <ResumeLanguageSkillModalForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />

        </ResumeSection>
    );
};

export default ResumeLanguageSkillsSection;