import axiosInstance from "./axios";
import fallbackData from "../data/fallbackData";

export const getPortfolioData = async () => {
  try {
    const response = await axiosInstance.get("/portfolio");
    return response.data;
  } catch (error) {
    console.warn("API not available. Using fallback data.");
    return fallbackData;
  }
};