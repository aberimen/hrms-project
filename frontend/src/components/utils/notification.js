import { toast } from "react-toastify";

export const successToast = (msg) => {
    toast.success(msg);
};

export const errorToast = (msg) => {
    toast.error(msg);
};