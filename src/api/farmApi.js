import axios, { AxiosInstance, AxiosResponse } from "axios";

/**
 * Axios instance for the gateway API
 */
const gatewayApi = axios.create({
  baseURL: process.env.REACT_APP_GATEWAY_API_URL || "our api url",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Get Farm list
 * @returns 
 */
const getFarms = async () => {
  try {
    const response = await gatewayApi.get("endpoint url");
    const data = response.data;
    if(!Array.isArray(data)){
      throw new Error("Invalid data format: Expected an array");
    }
    return data;
  } catch (error) {
    console.error("Error fetching farms:", error);
    throw error;
  }
};


/**
 * Get Farm by id
 * @param id 
 * @returns 
 */
const getFarmById = async (id) => {
  try {
    const response = await gatewayApi.get(`endpoint url`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching farm with id ${id}:`, error);
    throw error;
  }
};