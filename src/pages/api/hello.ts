import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    // 'Authorization': 'Bearer 1a3fdda9c4722cde4eeef14308ed8ed0f402297982dc4d28b44ae1491d2db87e',
  }
});