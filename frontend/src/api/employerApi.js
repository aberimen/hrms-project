import axios from "axios";

export const registerEmployer = employer => {
    return axios.post("/api/1.0/employers", employer);
};
