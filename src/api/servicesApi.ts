import axios from "axios"


export const getServices = async (sp_username : string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/service-providers/${sp_username}/services`)
  return response.data
}

export const getService = async (sp_username: string, service_name: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/service-providers/${sp_username}/services/${service_name}`)
  return response.data
}

export const getServiceReviews = async (sp_username: string, service_name: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/service-providers/${sp_username}/services/${service_name}/reviews`)
  return response.data
}

export const getServiceFAQs = async (sp_username: string, service_name: string) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/service-providers/${sp_username}/services/${service_name}/faqs`)
  return response.data
}


export const createServiceFAQ = async ({sp_username, service_name, question, answer}: {sp_username: string, service_name: string, question: string, answer: string}) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/service-providers/${sp_username}/services/${service_name}/faqs`, {
    
  })
}