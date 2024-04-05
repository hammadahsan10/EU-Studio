import { baseURL } from "../Config";
import axios from "axios";
import { toast } from "react-toastify";

export const handleGetRequest = (url, isShowLoad = false) =>
        async (dispatch) => {
            try {
                if (isShowLoad);
                const response = await axios.get(`${baseURL + url}`, {
                    headers: {
                        // authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                // if (isShowLoad);
                return response.data;
            } catch (error) {
                if (isShowLoad);
                const id = toast.loading("Please wait...");
                // if (error?.response?.status === 500) 
                // toast.update(id, { render: error?.response?.data?.message || "Something went wrong !!", type: "error", isLoading: false, autoClose: 3000 });
                // else toast.update(id, { render: error?.response?.data?.message || "Something went wrong !!", type: "warn", isLoading: false, autoClose: 3000 });
            }
        };