import http from './http'

export const getCatsApi = async (id: string) => {
  try {
    const data = await http.get(`/search?q=${id}`)
    return data.data
  } catch (error) {
    return error.message
  }
}
