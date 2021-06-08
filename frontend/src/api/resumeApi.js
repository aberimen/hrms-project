import axios from "axios";


export const getCandidateResume = resumeId => {
    return axios.get("/api/1.0/resumes?resumeId=" + resumeId);
};

export const addEducationDetails = (educationDetails, resumeId) => {
    return axios.post(`/api/1.0/education-details?resumeId= ${resumeId}`, educationDetails);
};

export const addExperience = (experience, resumeId) => {
    return axios.post(`/api/1.0/resumes/experiences?resumeId= ${resumeId}`, experience);
};

export const addLanguageSkill = (languageSkill, resumeId) => {
    return axios.post(`/api/1.0/resumes/language-skills?resumeId= ${resumeId}`, languageSkill);
};

export const addTechnicalSkill = (technicalSkill, resumeId) => {
    return axios.post(`/api/1.0/resumes/technical-skills?resumeId= ${resumeId}`, technicalSkill);
};

export const addTechnicalSkill = (technicalSkill, resumeId) => {
    return axios.post(`/api/1.0/resumes/technical-skills?resumeId= ${resumeId}`, technicalSkill);
};

export const addProfileImage = (file, resumeId) => {
    return axios.post(`/api/1.0/resumes/profile-image?resumeId= ${resumeId}`, file);
};

export const addSummary = (summary, resumeId) => {
    return axios.post(`/api/1.0/resumes/summary?resumeId= ${resumeId}`, summary);
};

export const addSocialAccounts = (socialAccounts, resumeId) => {
    return axios.post(`/api/1.0/resumes/social-accounts?resumeId= ${resumeId}`, socialAccounts);
};
