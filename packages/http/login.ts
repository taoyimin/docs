import axios, { type AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0'
  }
})

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message =
      error.response?.data?.error_description ?? error.response?.data?.msg ?? error.message
    return Promise.reject({
      ...error.response?.data,
      code: error.response?.status,
      message
    })
  }
)

export default instance
