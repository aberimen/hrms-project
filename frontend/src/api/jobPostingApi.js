import axios from "axios";


export const getAllJobPostings = () => {
    return axios.get("/api/1.0/job-postings");
};

export const createJobPosting = jobPost => {
    return axios.post("/api/1.0/job-postings", jobPost);
};

export const changeJobPostingStatus = id => {
    return axios.post(`/api/1.0/job-postings/status/${id}`);

};