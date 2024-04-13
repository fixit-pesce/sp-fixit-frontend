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
  Button,
  Spacer,
  useToast,
  Spinner
} from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'


import { useState } from 'react'
import { createServiceFAQ } from '../../api/servicesApi'
import { AxiosError } from 'axios'

interface AddFAQModalProps{
  isOpen: boolean
  onClose: () => void
  sp_username: string
  service_name: string
}

export default function AddFAQModal({isOpen, onClose, sp_username, service_name}: AddFAQModalProps) {
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const queryClient = useQueryClient()
  const toast = useToast()

  const mutation = useMutation({
    mutationFn: createServiceFAQ,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["services", sp_username, service_name, "faqs"]})
      setIsLoading(false)
      onClose()
      toast({
        title: "FAQ added successfully",
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

  const handleSubmit = () => {
    setIsLoading(true)
    mutation.mutate({sp_username, service_name, answer, question})
  }
  
  return (
    <Modal isOpen = {isOpen} onClose={onClose}>
      <ModalOverlay/>
      {
      isLoading ? <Spinner/> :
      (<ModalContent>
        <ModalHeader>Add FAQ</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <FormControl>
            <FormLabel>Add question</FormLabel>
            <Input value = {question} placeholder = "Enter question" onChange = {(e) => setQuestion(e.target.value)}/>
          </FormControl>
          <Spacer h = "4"/>
          <FormControl>
            <FormLabel>Add answer</FormLabel>
            <Input value = {answer} placeholder = "Enter answer" onChange = {(e) => setAnswer(e.target.value)}/>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Flex gap = "4">
            <Button color = "white" bg = "secondary.400" _hover = {{bg: "secondary.500"}} onClick = {handleSubmit}>Submit</Button>
            <Button color = "white" bg = "red.500" _hover = {{bg: "red.600"}}>Cancel</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>)}
    </Modal>
  )
}
