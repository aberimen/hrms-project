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