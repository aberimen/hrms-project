import axios from "axios";


export const getAllJobPositions = () =>{
    return axios.get("/api/1.0/positions");
};

export const createJobPosition = jobPosition =>{
    return axios.pos("/api/1.0/positions",jobPosition);
};
