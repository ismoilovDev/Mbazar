import axios from "axios";


const http = axios.create({
    baseURL: "https://malbazar.uz/api",
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
})

export default http;