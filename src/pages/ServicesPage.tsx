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

  return (
    <BaseLayout>
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