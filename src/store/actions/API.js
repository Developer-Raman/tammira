import axios from "axios";

const service = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: "application/json",
    contentType: "application/json",
});

export default service
  