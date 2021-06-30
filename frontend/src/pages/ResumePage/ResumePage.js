import React, { useEffect } from 'react';
import './ResumePage.scss';
import _ from 'lodash';
import defaultProfileImage from '../../assets/user-avatar.png';
import ResumeSummarySection from '../../components/ResumeSections/ResumeSummarySection';
import ResumeEducationDetailsSection from '../../components/ResumeSections/ResumeEducationDetailsSection';
import ResumeTechnicalSkillsSection from '../../components/ResumeSections/ResumeTechnicalSkillsSection'
import ResumeExperiencesSection from '../../components/ResumeSections/ResumeExperiencesSection';
import ResumeSocialAccountsSection from '../../components/ResumeSections/ResumeSocialAccountsSection';
import ResumeLanguageSkillsSection from '../../components/ResumeSections/ResumeLanguageSkillsSection';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetResume } from '../../redux/actions/resumeActions';


const ResumePage = () => {

    const dispatch = useDispatch();

    const {user} = useSelector(state => state.auth);


    useEffect(() => {
        loadResume();
    }, []);

    const loadResume = async () => {
        try {
            await dispatch(handleGetResume(user.resumeId));
        } catch (error) { }
    };


    const resume = useSelector(state => state.resume);
    console.log(resume);


    return (
        <div className="resume-page">
            <div className="page-cover">

            </div>
            <div className="container">
                <section className="profile-abstract">
                    <div className="avatar">
                        <img src={defaultProfileImage} />
                    </div>

                    <div className="name">
                        <h3>Abdurrahman Berimen</h3>
                    </div>
                </section>

                <ResumeSummarySection resume={resume} />

                 <ResumeEducationDetailsSection resume={resume} />

               {/* <ResumeExperiencesSection resume={resume} />

                <ResumeLanguageSkillsSection resume={resume} />

                <ResumeTechnicalSkillsSection resume={resume} />

                <ResumeSocialAccountsSection resume={resume} /> */}

            </div>
        </div >
    );
};

export default ResumePage;