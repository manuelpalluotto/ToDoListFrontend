import axios from "axios";

const URL = 'localhost:8080';

const apiClient = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json', },
    withCredentials: true,
},
);

export default apiClient;


