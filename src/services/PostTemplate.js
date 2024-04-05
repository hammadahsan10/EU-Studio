import { baseURL } from "../Config";
import axios from "axios";

export const handlePostRequest = async (data, url, isShowLoad = false) => {
    try {
        const response = await axios.post(`${baseURL + url}`, data, {
            headers: {
                "Content-Type": "application/json",
                // authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log("response post", response);
        return response?.data;
    } catch (error) {
        if (isShowLoad) {
            if (error?.response?.status === 400 || error?.response?.status === 500) {
                // toast.warn(error?.response?.data?.message || "Something went wrong !!");
            } else {
                // toast.warn(error?.response?.data?.message || "Something went wrong !!");
            }
        }
        return error?.response;
    }
};