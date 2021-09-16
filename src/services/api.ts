import axios from 'axios';

/**
 * @axios instance for better handling API requests
 */

export const API = axios.create({
  baseURL: 'http://your-url.com',
});
