
import axios from "axios";
import { TOAST_STATUS, showToast } from "./toast";

// FUNCTION TO FETCH ANY API CALLS BY PROVIDING URL AS THE ARGUMENT
export const fetchUrl = async(url)=>{
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        showToast(TOAST_STATUS.ERROR,"Oops something went wrong")
    }
}

