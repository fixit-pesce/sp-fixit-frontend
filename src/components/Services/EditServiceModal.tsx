import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Flex,
  Select,
  Button,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Spinner,
} from '@chakra-ui/react'

import { BaseSyntheticEvent, useState } from 'react'
import { Category } from '../../types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {  updateService } from '../../api/servicesApi'
import { AxiosError } from 'axios'

interface EditServiceModalProps{
  isOpen: boolean
  onClose: () => void
  sp_username: string
  categories: Category[]
  service: {
    name: string
    description: string,
    price: number,
    category: string
  }
}

export default function EditServiceModal({isOpen, onClose, sp_username, categories, service}: EditServiceModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  const queryClient = useQueryClient()
  const toast = useToast()

  const mutation = useMutation({
    mutationFn: updateService,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["services", sp_username]})
      setIsLoading(false)
      onClose()
      toast({
        title: "Service updated successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
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

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const name = e.target[1].value as string
    const description = e.target[2].value as string
    const price = e.target[3].value as number
    const category = e.target[4].value as string
    mutation.mutate({sp_username, name, description, price, category})
  }

  return (
    <Modal isOpen = {isOpen} onClose={onClose} size = "2xl">
      <ModalOverlay/>
      {
        isLoading ?
        <Spinner/> :
        (<ModalContent>
          <form onSubmit = {(e) => handleSubmit(e)}>
            <ModalHeader>Edit service</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <FormControl>
                <FormLabel>
                  Service Name
                </FormLabel>
                <Input placeholder = "Enter service name" mb = "4" defaultValue = {service.name}/>
              </FormControl>
              <FormControl>
                <FormLabel>
                  Description
                </FormLabel>
                <Textarea placeholder = "Enter description" mb = "4" defaultValue = {service.description}/>
              </FormControl>
              <FormControl>
                <FormLabel>
                  Price
                </FormLabel>
                <NumberInput min={0} defaultValue = {service.price}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel>
                  Category
                </FormLabel>
                <Select placeholder='Select option' defaultValue = {service.category}>
                  {categories && categories.map((category, index) => (
                    <option value = {category.name} key = {index}>{category.name}</option>
                  ))}
                </Select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Flex gap = "4">
                <Button bg = "secondary.400" _hover = {{bg: "secondary.500"}} color = "white" type = "submit">Submit</Button>
                <Button bg = "red.500" _hover = {{bg: "red.600"}} color = "white" onClick = {onClose}>Cancel</Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>)
      }
    </Modal>
  )
}
