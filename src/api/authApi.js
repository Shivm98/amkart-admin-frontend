import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const loginApi = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const signupApi = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/signup`, credentials);
  return response.data;
};
