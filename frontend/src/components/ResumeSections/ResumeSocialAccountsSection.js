import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import EditButton from '../EditButton';
import ResumeSection from '../ResumeSection/ResumeSection';
import ResumeSocialAccountsModalForm from './ModalForms/ResumeSocialAccountsModalForm';

const ResumeSocialAccountsSection = ({ resume }) => {

    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleClickAdd = () => {
        setIsUpdateMode(false);
        setModalVisible(true);
    };

    const handleClickEdit = () => {
        setIsUpdateMode(true);
        setModalVisible(true);
    };

    const { githubAccount, linkedinAccount } = resume;

    return (
        <ResumeSection className="social-accounts-section" title="Sosyal Hesaplar" >

            <div className="container p-3">
                {githubAccount &&
                    <div className="d-flex justify-content-between">
                        <div className="row">
                            <div className="ps-4 col-10 d-flex align-items-center" >
                                <AiFillGithub className="me-2" /> <div>{githubAccount}</div>
                            </div>
                            <div className="ps-4 mt-1 col-10 d-flex align-items-center">
                                <AiFillLinkedin className="me-2" /> <div>{linkedinAccount}</div>
                            </div>
                        </div>

                        <div className="ms-auto pe-2">
                            <EditButton onClick={handleClickEdit} />
                        </div>
                    </div>
                }



            </div>

            {(!linkedinAccount && !githubAccount) &&
                < ResumeSection.Footer onClickAdd={handleClickAdd} />
            }

            {/* modal  form */}

            <ResumeSocialAccountsModalForm
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                isUpdateMode={isUpdateMode}
                githubAccount={githubAccount}
                linkedinAccount={linkedinAccount}
            />

        </ResumeSection>
    );
};

export default ResumeSocialAccountsSection;