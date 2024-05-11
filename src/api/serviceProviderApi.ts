import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
})

export const getServiceProvider = async (sp_username: string) => {
  const response = await api.get(`/service-providers/${sp_username}`)
  return response.data
}

export const deleteServiceProvider = async (sp_username: string) => {
  const response = await api.delete(`/service-providers/${sp_username}`)
  return response.data
}

export const updateServiceProvider = async (
  sp_username: string,
  email: string,
  company_name: string
) => {
  const response = await api.put(`/service-providers/${sp_username}`, {
    email,
    company_name,
  })
  return response.data
}

export const useUpdateServiceProviderMutation = (sp_username: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      email,
      company_name,
    }: {
      email: string
      company_name: string
    }) => updateServiceProvider(sp_username, email, company_name),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["service-providers", sp_username],
      })
    },
  })
}
