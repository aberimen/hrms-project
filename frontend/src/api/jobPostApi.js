import axios from "axios";


export const getAllJobPosts = () => {
    return axios.get("/api/1.0/job-postings");
};

export const createJobPost = jobPost => {
    return axios.post("/api/1.0/job-postings", jobPost);
};

export const changeJobPostStatus = id => {
    return axios.post(`/api/1.0/job-postings/status/${id}`);

};