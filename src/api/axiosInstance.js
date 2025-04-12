import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://67fa5bc18ee14a5426277a4a.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
