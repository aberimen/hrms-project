import React, { useEffect, useState } from 'react';
import ResumeSection from '../../components/ResumeSection/ResumeSection';
import './ResumePage.scss';
import ResumeEducationForm from '../../components/ResumeEducationForm';
import ResumeExperienceForm from '../../components/ResumeExperienceForm';
import ResumeSocialAccountsForm from '../../components/ResumeSocialAccountsForm';
import ResumeTechnicalSkillForm from '../../components/ResumeTechnicalSkillForm';
import ResumeLanguageSkillForm from '../../components/ResumeLanguageSkillForm';
import { getCandidateResume } from '../../api/resumeApi';
import ResumeSummary from '../../components/ResumeSummary';
import _ from 'lodash';


const ResumePage = () => {
    const [visibleModalName, setVisibleModalName] = useState(undefined);

    const [resume, setResume] = useState({
        educationDetails: [],

    });

    useEffect(() => {
        loadResume();
    }, [resume]);

    const resumeId = 1;

    const loadResume = async () => {
        try {
            const result = await getCandidateResume(resumeId);
            if (!_.isEqual(result.data, resume)) { // eğer değişiklik yoksa resume state'i değiştirme yoksa useEffect tetiklenir, sonsuz döngü oluşur
                setResume(result.data);
            }
        } catch (error) { }
    };

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

                <ResumeSummary resume={resume} setResume={setResume} />

                <ResumeSection className="education-details-section" title="Eğitim Bilgisi" onClickAdd={() => { setVisibleModalName('educationDetails') }} >
                    {(visibleModalName === "educationDetails") &&
                        <ResumeEducationForm
                            modalVisible={true}
                            onModalClickCancel={() => { setVisibleModalName(undefined) }} />
                    }
                    {resume.educationDetails.map(education =>
                        <div className="row p-3 border-top">
                            <div className="col-3">
                                <div>{education.startDate}</div>
                                <div>{education.graduationDate}</div>
                                <div>{education.educationLevel}</div>
                            </div>
                            <div className="col-3">
                                <div className="fw-bold">Üniversite</div>
                                <div>{education.university.name}</div>
                            </div>
                            <div className="col-3">
                                <div className="fw-bold">Bölüm</div>
                                <div>{education.department.departmentName}</div>
                            </div>
                            <div className="col-3">
                                <div className="fw-bold">Öğretim Tipi</div>
                                <div>{education.educationType}</div>
                            </div>
                            <div className="col-3">
                                <div className="fw-bold">Öğretim Dili</div>
                                <div>{education.educationLanguage.languageName}</div>
                            </div>
                        </div>
                    )}

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