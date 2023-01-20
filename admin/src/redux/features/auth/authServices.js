import { base_url } from "../../../utils/baseUrl";
import axios from "axios";

//-----------------Login------------------

export const login = async (userdata) => {
  const response = await axios.post(`${base_url}/auth/login`, userdata);
  //console.log(response.data);
  if (response.data) {
    localStorage.setItem("user", response.data);
  }
  return response.data;
};
