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
    <Modal isOpen = {isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Add FAQ</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <FormControl>
            <FormLabel>
              <Input/>
            </FormLabel>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Flex>
            <Button bg = "secondary.400">Submit</Button>
            <Button bg = "red.400">Cancel</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
