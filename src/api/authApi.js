import axiosInstance from "./axiosInstance";
import { Login_URL, Register_URL } from "./endPoints";

export const loginApi = async (credentials) => {
  const response = await axiosInstance.post(Login_URL, credentials);
  return response.data;
};

export const registerApi = async (userInfo) => {
  const response = await axiosInstance.post(Register_URL, userInfo);
  console.log("response register => ", JSON.stringify(response));
  return response.data;
};
