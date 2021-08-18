import axios from "axios";


export const getAllJobPostings = ({ employmentType = '', min = '', max = '', isRemote = '', size = '', location = '', positionName = '' }) => {
    return axios.get(`/api/1.0/job-postings?size=${size}&min=${min}&max=${max}&isRemote=${isRemote}&employmentType=${employmentType}&location=${location}&positionName=${positionName}`)
};

export const createJobPosting = jobPost => {
    return axios.post("/api/1.0/job-postings", jobPost);
};

export const changeJobPostingStatus = id => {
    return axios.post(`/api/1.0/job-postings/status/${id}`);

};

export const getEmployerJobs = employerId => {
    return axios.get(`/api/1.0/employers/${employerId}/job-postings`);
};

export const getAppliedCandidates = jobId => {
    return axios.get(`/api/1.0/applied-candidates/${jobId}`);
};