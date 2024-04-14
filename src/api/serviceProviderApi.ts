import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
      Accept: "application/json",
      
  },
})


export const getServiceProvider = async(sp_username: string) => {
  const response = await api.get(`/service-providers/${sp_username}`)
  return response.data
}

export const deleteServiceProvider = async(sp_username: string) => {
  const response = await api.delete(`/service-providers/${sp_username}`)
  return response.data
}

export const updateServiceProvider = async(sp_username: string) => {
  const response = await api.put(`/service-providers/${sp_username}`)
  return response.data
}