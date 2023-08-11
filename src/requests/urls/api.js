import axios from 'axios';
const token = localStorage.getItem('access_token');

const api = axios.create({
 baseURL: "https://rolehub-api.up.railway.app/api/",
 headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
});

export default api