import axios from "axios";

export const login = credentials => {
    return axios.post('/api/1.0/auth/login', credentials);
};

export const registerCandidate = candidate => {
    return axios.post('/api/1.0/auth/candidate-register', candidate);
};

export const setAuthorizationToken = token => {
    if (token) {
        axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers['Authorization'];
    }
};
