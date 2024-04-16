import axios from "axios"

export const loginUser = async ({username, password} : {username: string, password: string}) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login/`, {
    username,
    password
  },{
    headers : {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  return response.data
}

export const signupUser = async ({email, username, company_name, password} : {email: string, username: string, company_name: string, password: string}) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/service-providers`, {
    email, username, password, company_name
  })
  return response.data
}