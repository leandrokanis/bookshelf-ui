import axios, { AxiosError, AxiosResponse } from 'axios'
import qs from 'qs'
import { getLocalStorage, setLocalStorage } from './utils'

let instance = axios.create({
  baseURL: `${process.env.API_URL}`,
  paramsSerializer: function (params) {
    return qs.stringify(params, { indices: false })
  },
})

instance.interceptors.request.use(
  (config) => {
    const currentSession = getLocalStorage('auth')

    config.headers = {
      'access-token': currentSession.accessToken,
      client: currentSession.client,
      uid: currentSession.uid,
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

function parseBody(response: AxiosResponse<any>) {
  if (response.status === 200 || response.status === 201) {
    return response.data
  } else {
    return this.parseError(response.data.messages)
  }
}

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return parseBody(response)
  },
  (error: AxiosError) => {
    console.warn('Error status', error.response.status)
  },
)

export const http = instance
