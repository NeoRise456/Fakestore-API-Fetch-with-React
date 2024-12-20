import axios from "axios";

// Set the API base URL of FakestoreAPI
const API_BASE_URL = "https://fakestoreapi.com/";

const http = axios.create({
    baseURL: API_BASE_URL,
});

http.defaults.headers.common["Content-Type"] = "application/json";
http.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default http;
