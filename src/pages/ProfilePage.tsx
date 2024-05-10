import BaseLayout from "../layouts/BaseLayout"
import {
  Flex,
  Heading,
  Button,
  Box,
  Spacer,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react"

import { getServiceProvider } from "../api/serviceProviderApi"
import { serviceProvider } from "../types"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import DeleteProfileModal from "../components/Profile/DeleteProfileModal"
import EditableTextInput from "../components/EditableTextInput"
import ChangePasswordModal from "../components/Profile/ChangePasswordModal"

export default function ProfilePage() {
  const sp_username = localStorage.getItem("sp_username") as string

  const { data } = useQuery<serviceProvider>({
    queryKey: ["service-provider", sp_username],
    queryFn: () => getServiceProvider(sp_username),
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure()

  const [companyName, setCompanyName] = useState(data?.company_name as string)
  const [email, setEmail] = useState(data?.email as string)

  return (
    <BaseLayout>
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 72px)">
        {data && (
          <Box bg="white" boxShadow="md" rounded="md" p="8">
            <Heading pb="4">Profile details - {sp_username}</Heading>
            <FormControl>
              <FormLabel>Company Name</FormLabel>
              <EditableTextInput
                defaultValue={data.company_name}
                setText={setCompanyName}
                type="input"
              />
            </FormControl>
            <Spacer h="4" />
            <FormControl>
              <FormLabel>Email</FormLabel>
              <EditableTextInput
                defaultValue={data.email}
                setText={setEmail}
                type="input"
              />
            </FormControl>
            <Flex pt="4" justifyContent="center" gap="4">
              <Button
                color="white"
                bg="secondary.400"
                _hover={{ bg: "secondary.500" }}
              >
                Save
              </Button>
              <Button
                color="white"
                bg="primary.400"
                _hover={{ bg: "primary.500" }}
                onClick={onOpen}
              >
                Change Password
              </Button>
              <Button colorScheme="red" onClick={onDeleteOpen}>
                Delete Account
              </Button>
            </Flex>
          </Box>
        )}
        <DeleteProfileModal
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
          sp_username={sp_username}
        />
        <ChangePasswordModal
          isOpen={isOpen}
          onClose={onClose}
          sp_username={sp_username}
        />
      </Flex>
    </BaseLayout>
  )
}
