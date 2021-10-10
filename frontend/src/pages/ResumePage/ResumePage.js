import React, { useEffect } from 'react';
import './ResumePage.scss';
import ResumeSummarySection from '../../components/ResumeSections/ResumeSummarySection';
import ResumeEducationDetailsSection from '../../components/ResumeSections/ResumeEducationDetailsSection';
import ResumeTechnicalSkillsSection from '../../components/ResumeSections/ResumeTechnicalSkillsSection'
import ResumeExperiencesSection from '../../components/ResumeSections/ResumeExperiencesSection';
import ResumeSocialAccountsSection from '../../components/ResumeSections/ResumeSocialAccountsSection';
import ResumeLanguageSkillsSection from '../../components/ResumeSections/ResumeLanguageSkillsSection';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetResume } from '../../redux/actions/resumeActions';
import ProfileImage from '../../components/ProfileImage/ProfileImage';


const ResumePage = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);


    useEffect(() => {
        loadResume();
    }, []);

    const loadResume = async () => {
        try {
            await dispatch(handleGetResume(user.resumeId));
        } catch (error) { }
    };


    const resume = useSelector(state => state.resume);


    return (
        <div className="resume-page">
            <div className="page-cover">

            </div>
            <div className="container">

                <section className="profile-abstract">
                    <ProfileImage resume={resume} />

                    <div className="name">
                        <h3>{user.name} {user.lastName}</h3>
                    </div>
                </section>

                <ResumeSummarySection resume={resume} previewMod={false} />

                <ResumeEducationDetailsSection resume={resume} previewMod={false} />

                <ResumeExperiencesSection resume={resume} />

                <ResumeLanguageSkillsSection resume={resume} previewMod={false} />

                {/* <ResumeTechnicalSkillsSection resume={resume} />*/}

                <ResumeSocialAccountsSection resume={resume} previewMod={false} />

            </div>
        </div >
    );
};

export default ResumePage;