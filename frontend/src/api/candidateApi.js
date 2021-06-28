import axios from "axios";

export const registerCandidate = candidate => {
    return axios.post("/api/1.0/candidates", candidate);
};

export const getAllCandidates = () => {
    return axios.post("/api/1.0/candidates");
};

export const createResume = (resume, candidateId) => {
    return axios.post(`/api/1.0/candidates/${candidateId}/createresume`, resume);
};

export const getFavoriteJobs = (candidateId) => {
    return axios.get(`/api/1.0/candidates/favorite-jobs/${candidateId}`);
};

export const addToFavoriteJobs = (candidateId, jobId) => {
    return axios.post(`/api/1.0/candidates/favorite-jobs/${candidateId}/${jobId}`);
};

export const removeFromFavoriteJobs = (candidateId, jobId) => {
    return axios.delete(`/api/1.0/candidates/favorite-jobs/${candidateId}/${jobId}`);
};