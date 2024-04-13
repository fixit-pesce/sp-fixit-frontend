import {
  Box,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Text,
  Button,
  useToast
} from "@chakra-ui/react";
import { useNavigate, NavLink } from "react-router-dom";
import { PasswordField } from "./PasswordField";
import { BaseSyntheticEvent, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function Signup() {
  const [isLoading , setIsLoading] = useState(false)

  const toast = useToast()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: {access_token: string, token_type: string}) => {
      localStorage.setItem('token', data.access_token)
      const decoded = jwtDecode(data.access_token)
      localStorage.setItem('sp_username', decoded["username"])
      navigate('/profile')
      setIsLoading(false)
    },
    onError: (res: AxiosError) => {
      toast({
        position: "top",
        title: res.response?.data ? `Error: ${Object.entries(res.response?.data)[0][1]}` : `Error: ${res.message}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      setIsLoading(false)
    }
  })

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const username = e.target.form[0].value
    const password = e.target.form[2].value
    mutation.mutate({username, password})
  }
  return (
  <Box>
    <form>
      <Stack spacing="5">
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            placeholder="Enter your username"
            required
          />
        </FormControl>
        <PasswordField
          placeholder="Enter your password"
        />
        <Text textAlign = "center">Don't have an account? <NavLink to = "/signup" color = "blue.300">Sign Up</NavLink></Text>
        <Button
          bg = "primary.400"
          color= "foreground"
          _hover={{bg: "primary.500"}}
          type = "submit"
          onClick={(e) => handleSubmit(e)}
          isLoading = {isLoading}
          >Login
        </Button>
      </Stack>
    </form>
  </Box>
  )
}
