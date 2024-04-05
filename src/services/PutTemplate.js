import { baseURL } from "../Config";
import axios from "axios";

export const handlePutRequest =
    (data, url, isShowLoad = false, isShowToast = true) =>
    async (dispatch) => {
        // data = await trimData(data);
        try {
            if (isShowLoad);
            const response = await axios({
                method: "put",
                url: `${baseURL + url}`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            // if (isShowToast) toast.success(response?.data?.message);
            // if (isShowLoad);
            return response?.data;
        } catch (error) {
            if (isShowLoad);
            if (error?.response?.status === 400 || error?.response?.status === 500) {
                // toast.warn(error?.response?.data?.message || "Something went wrong !!");
            } else {
                // toast.warn(error?.response?.data?.message || "Something went wrong !!");
            }
            return error?.response;
        }
    };
