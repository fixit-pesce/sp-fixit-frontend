import BaseLayout from "../layouts/BaseLayout";
import {
  Flex,
  Icon,
  Heading,
  Link,
  Button,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  IconButton
} from "@chakra-ui/react"

import { MdHandyman } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import ServiceTable from "../components/Services/ServiceTable";

export default function ServicesPage() {
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
      <Box mt = "8">
        <Flex justifyContent = "center" w = "xl" mx = "auto">
          <InputGroup>
            <Input
              id="search"
              name="search"
              type="search"
              bg = "foreground"
              boxShadow = "md"
              rounded = "xl"
              autoComplete="search"
              placeholder="Search"
              required
            />
            <InputRightElement>
              <IconButton
                variant="text"
                aria-label="Search database"
                opacity = "0.5"
                icon={<FaSearch />}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex w = {{base: "xl", md: "100%"}} gap = "4" justifyContent = "center" mt = "8" mx = "auto">
          <ServiceTable/>
        </Flex>
      </Box>
    </BaseLayout>
  )
}