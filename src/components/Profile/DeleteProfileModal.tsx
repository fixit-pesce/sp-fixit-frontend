import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { deleteServiceProvider } from '../../api/serviceProviderApi'
import { BaseSyntheticEvent, useState } from 'react'
import { AxiosError } from 'axios'


interface DeleteProfileModalProps{
  isOpen: boolean
  onClose: () => void
  sp_username: string
}


export default function DeleteProfileModal({isOpen, onClose, sp_username}: DeleteProfileModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const toast = useToast()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: deleteServiceProvider,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["service-provider"]})
      setIsLoading(false)
      onClose()
      toast({
        "title": "Service Provider deleted successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate("/")
    },
    onError: (res: AxiosError) => {
      toast({
        title: res.response?.data ? `Error: ${Object.entries(res.response?.data)[0][1]}` : `Error: ${res.message}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      setIsLoading(false)
      onClose()
    }
  })

  const handleDelete = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)
    mutation.mutate(sp_username)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      {
      isLoading ?
      <Spinner/> :
      (<ModalContent>
        <ModalHeader>Are you sure you want to delete {sp_username}?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
          All the services associated with this service provider will the deleted. This action cannot be undone.
          </Text>
        </ModalBody>
        <ModalFooter justifyContent="center" gap = "4">
          <Button color = "white" bg = "secondary.400" _hover = {{bg: "secondary.500"}} onClick = {(e) => handleDelete(e)}>Yes</Button>
          <Button colorScheme = "red" onClick = {onClose}>No</Button>
        </ModalFooter>
      </ModalContent>)}
      </Modal>
  )
}
