import axios from "axios";

export const getLocations = () => {
    return axios.get('/api/1.0//common/locations');
};

export const getUniversities = () => {
    return axios.get('/api/1.0//common/universities');
};

export const getLanguages = () => {
    return axios.get('/api/1.0//common/languages');
};

export const getDepartments = () => {
    return axios.get('/api/1.0//common/departments');
};