
import axios from "axios";
import { BASE_URL } from "../../../base";

export const filterPartnerByAge = async (modeId, minAge, maxAge) => {
  try {
    const response = await axios.get(`${BASE_URL}/User/getByAgeRange/${minAge}/${maxAge}/${modeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const filterPartnerByGender = async (modeId, gender) =>{
  try {
    const response = await axios(`${BASE_URL}/User/getByGender/${gender}/${modeId}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}
