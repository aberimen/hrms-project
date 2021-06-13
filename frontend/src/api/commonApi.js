import axios from "axios";

export const getLocations = () => {
    return axios.get('/api/1.0//common/locations');
};