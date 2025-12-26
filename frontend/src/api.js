import axios from 'axios';

const API = axios.create({
  baseURL: "http://backend_service:8080",
});

export default API;