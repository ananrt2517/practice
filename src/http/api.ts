import http from './http'

export const getCatsApi = async (id: string) => {
  try {
    const data = await http.get(`/search?q=${id}`)
    return data.data
  } catch (error) {
    return error.message
  }
}

export const getSingleCatsApi = async (id: string) => {
  try {
    const data = await http.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
    return data.data
  } catch (error) {
    return error.message
  }
}