import axios from "axios";

export const verifyEmail = (email) => {
    return axios.get("/api/1.0/users/email-verification", email);
};


