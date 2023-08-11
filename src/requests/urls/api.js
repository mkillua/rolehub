import axios from 'axios';
const token = localStorage.getItem('access_token');

const api = axios.create({
 baseURL: "http://localhost:8000/api/",
 headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
});

export default api