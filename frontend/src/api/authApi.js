import axios from "axios";

export const login = credentials => {
    return axios.post('/api/1.0/auth/login', credentials);
};