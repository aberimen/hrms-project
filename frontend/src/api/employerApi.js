import axios from "axios";

export const registerEmployer = employer => {
    return axios.post("/api/1.0/employers", employer);
};

export const updateEmployer = (id, employer) => {
    return axios.put('/api/1.0/employers/account-details/' + id, employer);
};