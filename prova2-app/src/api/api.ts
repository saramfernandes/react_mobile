import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/finance',
    params: {
        key: "aba13715",
    },
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
