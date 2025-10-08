import axios from "axios";

const api = axios.create({
    /////////////////////////aqui vai o link e a key juntinho <3
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;