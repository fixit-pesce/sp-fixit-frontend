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

interface CreateServiceModalProps{
  isOpen: boolean
  onClose: () => void
}

export default function CreateServiceModal({isOpen, onClose}: CreateServiceModalProps) {
  return (
    <Modal isOpen = {isOpen} onClose={onClose} size = "2xl">
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Create new service</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <FormControl>
            <FormLabel>
              Service Name
            </FormLabel>
            <Input placeholder = "Enter service name"/>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Flex gap = "4">
            <Button bg = "secondary.400" _hover = {{bg: "secondary.500"}} color = "white">Submit</Button>
            <Button bg = "red.400" _hover = {{bg: "red.500"}} color = "white">Cancel</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
