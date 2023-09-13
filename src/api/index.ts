import axios from 'axios';

const headers = {
    "Content-Type": 'application/json',
}

const baseURL = import.meta.env.VITE_APP_BASE_API_URL

const axiosInstance = axios.create({
    baseURL,
    timeout: 1000 * 60,
    headers,
})

export default axiosInstance