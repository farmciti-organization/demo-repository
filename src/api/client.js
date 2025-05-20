// src/api/client.ts
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // ex) https://api.myservice.com
  timeout: 10_000,                             // 10 seconds
});

// Request interceptors — e.g: add token
client.interceptors.request.use(config => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptors — e.g: Error batch processing
client.interceptors.response.use(
  res => res,
  err => {
    // ex) 401 Unauthorized -> redirect
    if (err.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default client;
