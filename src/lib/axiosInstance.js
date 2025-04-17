import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api/v2",
  baseURL:"https://ducktail-backend-temp-yyy42.ondigitalocean.app",
});

const axiosInstancev1 = axios.create({
  // baseURL: "http://localhost:5000/api/v1"
  baseURL:"https://ducktail-backend-temp-yyy42.ondigitalocean.app",
}) 

export {axiosInstance, axiosInstancev1};
