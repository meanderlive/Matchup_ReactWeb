import axios from "axios"
import { BASE_URL, DATE_MODE } from "../../../base"

// term and condition
export const getTermAndCond = async (modeId) => {
    try {
        const response = await axios.get(`${BASE_URL}/termsAndConditions/getall/${modeId}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}
// Privacy & Policy
export const PrivacyPolicy = async (modeId) => {
    try {
        const response = await axios.get(`${BASE_URL}/privacy_policys/getall/${modeId}?page_number=1&page_size=100`)
        return response.data;
    } catch (error) {
        throw error;
    }
}