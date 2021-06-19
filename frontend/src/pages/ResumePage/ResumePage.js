import React, { useState } from 'react';
import ResumeSection from '../../components/ResumeSection/ResumeSection';
import './ResumePage.scss';
import ResumeEducationForm from '../../components/ResumeEducationForm';
import ResumeSummaryForm from '../../components/ResumeSummaryForm';
import ResumeExperienceForm from '../../components/ResumeExperienceForm';
import ResumeSocialAccountsForm from '../../components/ResumeSocialAccountsForm';
import ResumeTechnicalSkillForm from '../../components/ResumeTechnicalSkillForm';
import ResumeLanguageSkillForm from '../../components/ResumeLanguageSkillForm';



const ResumePage = () => {
    const [visibleModalName, setVisibleModalName] = useState(undefined);


    return (
        <div className="resume-page">
            <div className="page-cover">

            </div>
            <div className="container">
                <section className="profile-abstract">
                    <div className="avatar">
                        <img src="https://docs.kariyer.net/candidate/000/023/126/avatar/2312643620200305030012126.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUkG5fX%2FbBgSfjhdDH1dPFyzu4riam%2BLuxakhgzkZIV7EdySUEoa4gX4Q9cePbWkABF%2F9dgSvqBIQ!e!" />
                    </div>

                    <div className="name">
                        <h3>Abdurrahman Berimen</h3>
                    </div>
                </section>



                <ResumeSection className="summary-section" title="Öz" onClickAdd={() => { setVisibleModalName('summary') }}  >
                    {(visibleModalName === "summary") &&
                        <ResumeSummaryForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }

                </ResumeSection>

                <ResumeSection className="education-details-section" title="Eğitim Bilgisi" onClickAdd={() => { setVisibleModalName('educationDetails') }} >
                    {(visibleModalName === "educationDetails") &&
                        <ResumeEducationForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }
                    body here
                </ResumeSection>


                <ResumeSection className="experiences-section" title="Deneyim" onClickAdd={() => { setVisibleModalName('experiences') }} >
                    {(visibleModalName === "experiences") &&
                        <ResumeExperienceForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }
                </ResumeSection>


                <ResumeSection className="language-skills-section" title="Yabancı Dil" onClickAdd={() => { setVisibleModalName('language-skills') }} >
                    {(visibleModalName === "language-skills") &&
                        <ResumeLanguageSkillForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }
                </ResumeSection>

                <ResumeSection className="technical-skills-section" title="Teknik Bilgileri" onClickAdd={() => { setVisibleModalName('technical-skills') }} >
                    {(visibleModalName === "technical-skills") &&
                        <ResumeTechnicalSkillForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }

                </ResumeSection>

                <ResumeSection className="social-section" title="Sosyal Hesaplar" onClickAdd={() => { setVisibleModalName('social') }}>
                    {(visibleModalName === "social") &&
                        <ResumeSocialAccountsForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }

                </ResumeSection>

            </div>
        </div >
    );
};

export default ResumePage;