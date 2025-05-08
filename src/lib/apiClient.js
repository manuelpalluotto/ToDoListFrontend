import axios from "axios";


const URL = 'http://localhost:8080';

const apiClient = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json', },
},
);
apiClient.defaults.withCredentials = true;
export default apiClient;


