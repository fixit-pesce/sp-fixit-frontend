import axios from "axios"

export const getServices = async (sp_username: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/service-providers/${sp_username}/services`
  )
  return response.data
}

export const getService = async (sp_username: string, service_name: string) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${service_name}`
  )
  return response.data
}

export const createService = async ({
  sp_username,
  name,
  description,
  price,
  category,
  locality,
  city,
}: {
  sp_username: string
  name: string
  description: string
  price: number
  category: string
  locality: string
  city: string
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/service-providers/${sp_username}/services`,
    {
      name,
      description,
      price,
      category,
      location: {
        locality,
        city,
      },
    }
  )
  return response.data
}

export const updateService = async ({
  sp_username,
  name,
  description,
  price,
  category,
}: {
  sp_username: string
  name: string
  description: string
  price: number
  category: string
}) => {
  const response = await axios.put(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${name}`,
    {
      name,
      description,
      price,
      category,
    }
  )
  return response.data
}

export const deleteService = async ({
  sp_username,
  name,
}: {
  sp_username: string
  name: string
}) => {
  const response = await axios.delete(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${name}`
  )
  return response.data
}

export const getServiceReviews = async (
  sp_username: string,
  service_name: string
) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${service_name}/reviews`
  )
  return response.data
}

export const getServiceFAQs = async (
  sp_username: string,
  service_name: string
) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${service_name}/faqs`
  )
  return response.data
}

export const createServiceFAQ = async ({
  sp_username,
  service_name,
  question,
  answer,
}: {
  sp_username: string
  service_name: string
  question: string
  answer: string
}) => {
  const response = await axios.post(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${service_name}/faqs`,
    {
      question,
      answer,
    }
  )
  return response.data
}

export const deleteOneServiceFAQ = async ({
  sp_username,
  service_name,
  question,
}: {
  sp_username: string
  service_name: string
  question: string
}) => {
  const response = await axios.delete(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${service_name}/faqs/${question}`
  )
  return response.data
}

export const deleteOneAllFAQs = async ({
  sp_username,
  service_name,
}: {
  sp_username: string
  service_name: string
}) => {
  const response = await axios.delete(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${service_name}/faqs`
  )
  return response.data
}

export const getCategories = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`)
  return response.data
  return response.data
}

export const getServiceBooking = async (
  sp_username: string,
  service_name: string
) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/service-providers/${sp_username}/services/${service_name}/bookings`
  )
  return response.data
}
