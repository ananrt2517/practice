import axios from 'axios'

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds'
axios.defaults.headers.common['x-api-key'] =
  'f8fa094e-4c3b-493b-acca-0d6edcab0b06'

export default axios
