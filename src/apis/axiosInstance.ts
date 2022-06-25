import axios from "axios";
import { PRODUCTION } from "../constants";

const axiosInstance = axios.create();

axiosInstance.defaults.validateStatus = (status) => status < 400;
axiosInstance.defaults.baseURL = PRODUCTION
  ? "https://apis-studio.ohoolabs.com/prod/v1"
  : "https://apis-studio.ohoolabs.com/dev/v1";
axiosInstance.defaults.withCredentials = true; // API에도 cookie가 함께 전송 될 수 있도록 설정
axiosInstance.defaults.timeout = 30000;

export default axiosInstance;
