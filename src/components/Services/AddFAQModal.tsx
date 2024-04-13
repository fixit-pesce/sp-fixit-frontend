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
  Button
} from '@chakra-ui/react'


import { useState } from 'react'

interface AddFAQModalProps{
  isOpen: boolean
  onClose: () => void
}

export default function AddFAQModal({isOpen, onClose}: AddFAQModalProps) {
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")
  
  return (
    <Modal isOpen = {isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Add FAQ</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <FormControl>
            <FormLabel>Add question</FormLabel>
            <Input value = {question} placeholder = "Enter question" onChange = {(e) => setQuestion(e.target.value)}/>
          </FormControl>
          <FormControl>
            <FormLabel>Add answer</FormLabel>
            <Input value = {answer} placeholder = "Enter answer" onChange = {(e) => setAnswer(e.target.value)}/>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Flex>
            <Button>Submit</Button>
            <Button>Submit</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
