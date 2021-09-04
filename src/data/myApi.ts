import axios from 'axios'
import { DefaultApiFactory } from './api'

// Add a response interceptor
axios.interceptors.response.use(
  (r) => r,
  (e) => {
    console.dir(e)

    return Promise.reject(e)
  }
)

export const MyApi = DefaultApiFactory(
  undefined,
  'https://australia-southeast1-lida-api-313611.cloudfunctions.net/rest-api'
)
