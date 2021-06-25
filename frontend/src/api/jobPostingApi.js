import axios from "axios";


export const getAllJobPostings = ({ employmentType = '', min = '', max = '', isRemote = '', size = '' }) => {
    return axios.get(`/api/1.0/job-postings?size=${size}&min=${min}&max=${max}&isRemote=${isRemote}&employmentType=${employmentType}`)
};

export const createJobPosting = jobPost => {
    return axios.post("/api/1.0/job-postings", jobPost);
};

export const changeJobPostingStatus = id => {
    return axios.post(`/api/1.0/job-postings/status/${id}`);

};