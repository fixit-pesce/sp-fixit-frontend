import BaseLayout from "../layouts/BaseLayout";
import {
  Flex,
  Button,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  useDisclosure
} from "@chakra-ui/react"

import { FaSearch } from "react-icons/fa";

import ServiceTable from "../components/Services/ServiceTable";
import CreateServiceModal from "../components/Services/CreateServiceModal";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../types";
import { getCategories } from "../api/servicesApi";

export default function ServicesPage() {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const sp_username = localStorage.getItem("sp_username") as string

  const {data} = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  return (
    <BaseLayout>
      <Box mt = "8">
        <Flex justifyContent = "center" w = "xl" mx = "auto" gap = "4">
          <InputGroup>
            <Input
              id="search"
              name="search"
              type="search"
              bg = "white"
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
          <Button bg = "secondary.400" color = "white" _hover = {{bg: "secondary.500"}} onClick = {onOpen}>Add Service</Button>
        </Flex>
        <Flex w = {{base: "xl", md: "100%"}} gap = "4" justifyContent = "center" mt = "8" mx = "auto">
          <ServiceTable/>
        </Flex>
      </Box>
      {data && <CreateServiceModal isOpen = {isOpen} onClose = {onClose} categories={data} sp_username = {sp_username}/>}
    </BaseLayout>
  )
}