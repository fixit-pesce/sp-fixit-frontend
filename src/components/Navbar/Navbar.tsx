import {Flex, Link, Image, Heading, Button} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { logout } from "../../utils/user"

export default function Navbar() {
  return (
    <Flex as = "header" bg = "primary.900" boxShadow = "md" p = "4">
      <Flex alignItems = "center" w = "80%" justifyContent = "space-between" mx = "auto">
          <Flex alignItems = "center" gap = "4">
            <Image src = "/logo.png" w = "32px" h = "32px"/>
            <Heading color = "white" fontSize = "24px">Fixit - Service Providers</Heading>
          </Flex>
          <Flex gap = "4" color = "white" fontWeight = "bold" alignItems = "center">
            <Link as = {NavLink} to = "/profile" _activeLink = {{color: "secondary.400"}} _hover = {{textDecoration: "none", color: "secondary.500"}} color = "white">My Profile</Link>
            <Link as = {NavLink} to = "/services" _activeLink = {{color: "secondary.400"}} _hover = {{textDecoration: "none", color: "secondary.500"}} color = "white">My Services</Link>
            <Button bg = "secondary.400" color = "white" _hover = {{bg: "secondary.500"}} onClick = {logout}>Logout</Button>
          </Flex>
        </Flex>
    </Flex>
  )
}
