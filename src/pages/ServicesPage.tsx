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
  IconButton,
  useDisclosure
} from "@chakra-ui/react"

import { FaSearch } from "react-icons/fa";

import ServiceTable from "../components/Services/ServiceTable";
import CreateServiceModal from "../components/Services/CreateServiceModal";

export default function ServicesPage() {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <BaseLayout>
      <Box mt = "8">
        <Flex justifyContent = "center" w = "xl" mx = "auto" gap = "4">
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
          <Button bg = "primary.400" color = "white" _hover = {{bg: "primary.500"}} onClick = {onOpen}>Add Service</Button>
        </Flex>
        <Flex w = {{base: "xl", md: "100%"}} gap = "4" justifyContent = "center" mt = "8" mx = "auto">
          <ServiceTable/>
        </Flex>
      </Box>
      <CreateServiceModal isOpen = {isOpen} onClose = {onClose}/>
    </BaseLayout>
  )
}