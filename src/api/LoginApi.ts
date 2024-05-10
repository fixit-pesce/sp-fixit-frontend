import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const loginUser = async ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/login/`,
    {
      username,
      password,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
  return response.data
}

export const signupUser = async ({
  email,
  username,
  company_name,
  password,
}: {
  email: string
  username: string
  company_name: string
  password: string
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/service-providers`,
    {
      email,
      username,
      password,
      company_name,
    }
  )
  return response.data
}

export const changePassword = async (
  username: string,
  current_password: string,
  new_password: string
) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/change-password/${username}`,
    {
      current_password,
      new_password,
    }
  )
  return response.data
}

export const useChangePasswordMutation = (username: string) => {
  return useMutation({
    mutationFn: ({
      current_password,
      new_password,
    }: {
      current_password: string
      new_password: string
    }) => changePassword(username, current_password, new_password),
  })
}
