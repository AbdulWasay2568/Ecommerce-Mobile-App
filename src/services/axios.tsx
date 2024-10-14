import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://192.168.18.6:3000', // Use your laptop's IP address
  headers: {
    'Content-Type': 'application/json',
  },
});
