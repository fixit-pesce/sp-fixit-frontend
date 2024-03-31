import BaseLayout from "../layouts/BaseLayout";
import {
  Flex,
  Icon,
  Heading,
  Button
} from "@chakra-ui/react"

import { MdHandyman } from "react-icons/md";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <BaseLayout>
      <Navbar>
        <Flex alignItems = "center" gap = "3" w = "80%" justifyContent = "space-between" mx = "auto">
          <Flex alignItems = "center" gap = "3">
            <Icon as = {MdHandyman} color = "foreground" boxSize = "32px" />
            <Heading color = "foreground" fontSize = "24px">Fixit - Service Providers</Heading>
          </Flex>
          <Flex>
            <Button bg = "primary.400" color = "foreground" _hover = {{bg: "primary.500"}} onClick = {() => navigate("/login")}>Login</Button>
          </Flex>
        </Flex>
      </Navbar>
    </BaseLayout>
  )
}