import BaseLayout from "../layouts/BaseLayout";
import {
  Flex,
  Icon,
  Heading,
  Link,
  Button
} from "@chakra-ui/react"

import { MdHandyman } from "react-icons/md";
import Navbar from "../components/Navbar/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <BaseLayout>
      <Navbar>
        <Flex alignItems = "center" w = "80%" justifyContent = "space-between" mx = "auto">
          <Flex alignItems = "center" gap = "4">
            <Icon as = {MdHandyman} color = "foreground" boxSize = "32px" />
            <Heading color = "foreground" fontSize = "24px">Fixit - Service Providers</Heading>
          </Flex>
          <Flex gap = "4" color = "foreground" fontWeight = "bold" alignItems = "center">
            <Link as = {NavLink} to = "/profile" _activeLink = {{color: "primary.400"}} _hover = {{textDecoration: "none", color: "primary.500"}}>My Profile</Link>
            <Link as = {NavLink} to = "/services" _activeLink = {{color: "primary.400"}} _hover = {{textDecoration: "none", color: "primary.500"}}>My Services</Link>
            <Button bg = "primary.400" color = "foreground" _hover = {{bg: "primary.500"}} onClick = {logout}>Logout</Button>
          </Flex>
        </Flex>
      </Navbar>
    </BaseLayout>
  )
}