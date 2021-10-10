import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCandidateResume } from '../api/resumeApi';
import defaultProfileImage from '../assets/user-avatar.png';
import ResumeEducationDetailsSection from '../components/ResumeSections/ResumeEducationDetailsSection';
import ResumeLanguageSkillsSection from '../components/ResumeSections/ResumeLanguageSkillsSection';
import ResumeSocialAccountsSection from '../components/ResumeSections/ResumeSocialAccountsSection';
import ResumeSummarySection from '../components/ResumeSections/ResumeSummarySection';
import './resumePreview.scss';

const ResumePreviewPage = () => {

    const [resume, setResume] = useState({
        educationDetails: [],
        languageSkills: [],
        profileImage: defaultProfileImage

    });
    const { resumeId, } = useParams();

    const { profileImage, summary } = resume;

    const loadResume = async () => {
        try {
            const result = await getCandidateResume(resumeId);
            setResume({
                ...resume,
                ...result.data
            });
        } catch (err) { }
    };

    useEffect(() => {
        loadResume();
    }, []);

    return (
        <div className="resume-page">
            <div className="page-cover">

            </div>
            <div className="container">

                <section className="profile-abstract">
                    <div className="image">
                        <img className="rounded-circle" src={profileImage} />
                    </div>
                </section>

                <ResumeSummarySection resume={resume} previewMod={true} />
                <ResumeEducationDetailsSection resume={resume} previewMod={true} />
                <ResumeLanguageSkillsSection resume={resume} previewMod={true} />

                {/* <ResumeTechnicalSkillsSection resume={resume} />*/}

                <ResumeSocialAccountsSection resume={resume} previewMod={true} />


            </div>
        </div>

    );
};

export default ResumePreviewPage;