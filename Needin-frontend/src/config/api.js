import axios from 'axios';

const LOCALHOST='http://localhost:5454';
export const API_BASE_URL = LOCALHOST;

const token = localStorage.getItem('jwt');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined, // Add JWT token to headers if available
    'Content-Type': 'application/json',
  },
});

export default api;
