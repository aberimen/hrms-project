import axios from "axios";


export const getCandidateResume = resumeId => {
    return axios.get("/api/1.0/resumes/" + resumeId);
};

export const addEducationDetails = (educationDetails, resumeId) => {
    return axios.post(`/api/1.0/resumes/education-details?resumeId=${resumeId}`, educationDetails);
};

export const addExperience = (experience, resumeId) => {
    return axios.post(`/api/1.0/resumes/experiences?resumeId=${resumeId}`, experience);
};

export const addLanguageSkill = (languageSkill, resumeId) => {
    return axios.post(`/api/1.0/resumes/language-skills?resumeId=${resumeId}`, languageSkill);
};

export const addTechnicalSkill = (technicalSkill, resumeId) => {
    return axios.post(`/api/1.0/resumes/technical-skills?resumeId=${resumeId}`, technicalSkill);
};

export const addProfileImage = (file, resumeId) => {
    return axios.post(`/api/1.0/resumes/profile-image?resumeId=${resumeId}`, file);
};

export const addSummary = (summary, resumeId) => {
    return axios.post(`/api/1.0/resumes/summary?resumeId=${resumeId}`, summary);
};

export const addSocialAccounts = (socialAccounts, resumeId) => {
    return axios.post(`/api/1.0/resumes/social-accounts?resumeId=${resumeId}`, socialAccounts);
};

export const getEducationLevels = () => {
    return [
        { value: "BACHELOR", label: "Lisans" },
        { value: "ASSOCIATE", label: "Ön Lisans" },
        { value: "MASTER", label: "Yüksek Lisans" },
        { value: "DOCTORAL", label: "Doktora" },
        { value: "HIGH_SCHOOL", label: "Lise" },
    ];
};

export const getEducationTypes = () => {
    return [
        { value: "ORGUN", label: "Örgün" },
        { value: "IKINCI_OGRETIM", label: "İkinci Öğretim" },
        { value: "ACIK_OGRETIM", label: "Açık Öğretim" }
    ];
};


//update APIs

export const updateSummary = (summary, resumeId) => {
    return axios.put(`/api/1.0/resumes/summary?resumeId=${resumeId}`, summary);
};

export const updateEducationDetails = (educationDetails, resumeId) => {
    return axios.put(`/api/1.0/resumes/education-details?resumeId=${resumeId}`, educationDetails);
};

export const updateExperience = (experience, resumeId) => {
    return axios.put(`/api/1.0/resumes/experiences?resumeId=${resumeId}`, experience);
};

export const updateLanguageSkill = (languageSkill, resumeId) => {
    return axios.put(`/api/1.0/resumes/language-skills?resumeId=${resumeId}`, languageSkill);
};

export const updateTechnicalSkill = (technicalSkill, resumeId) => {
    return axios.put(`/api/1.0/resumes/technical-skills?resumeId=${resumeId}`, technicalSkill);
};

export const updateProfileImage = (file, resumeId) => {
    return axios.put(`/api/1.0/resumes/profile-image?resumeId=${resumeId}`, file);
};

export const updateSocialAccounts = (socialAccounts, resumeId) => {
    return axios.put(`/api/1.0/resumes/social-accounts?resumeId=${resumeId}`, socialAccounts);
};


