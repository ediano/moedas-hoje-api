import axios, { AxiosRequestConfig } from 'axios'

export const api = (config: AxiosRequestConfig) => axios.create(config)
