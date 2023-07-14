import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:9090/",
});

export default axiosInstance;
