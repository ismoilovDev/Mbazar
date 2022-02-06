import axios from "axios";

// HTTP so'rov hosil qilish
const http = axios.create({
    baseURL: "https://malbazar.uz/api",  // Server Urli
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') // So'rov sarlavhasi
    }
})


// headers: {"X-CSRFToken": csrfToken},
export default http;