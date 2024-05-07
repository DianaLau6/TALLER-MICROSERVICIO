import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // URL base de tu backend
  timeout: 10000, // tiempo de espera
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
