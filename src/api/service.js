import {apiUrl,accessToken} from './config'
import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL:apiUrl,
  headers:{
    Authorization: `Bearer ${accessToken}`,
  },
})
