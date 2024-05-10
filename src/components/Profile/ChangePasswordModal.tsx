import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react"
import { useState } from "react"
import { useChangePasswordMutation } from "../../api/LoginApi"

export default function ChangePasswordModal({
  isOpen,
  onClose,
  sp_username,
}: {
  isOpen: boolean
  onClose: () => void
  sp_username: string
}) {
  const [old, setOld] = useState("")
  const [newP, setPNew] = useState("")
  const [confirm, setConfirm] = useState("")

  const passwordMutation = useChangePasswordMutation(sp_username)

  const handleSubmit = () => {
    passwordMutation.mutate(
      { current_password: old, new_password: newP },
      { onSuccess: onClose }
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change Password</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Old Password</FormLabel>
            <Input
              placeholder="Enter old password"
              value={old}
              onChange={(e) => setOld(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>New Password</FormLabel>
            <Input
              placeholder="Enter old password"
              value={newP}
              onChange={(e) => setPNew(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              placeholder="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            color="white"
            bg="secondary.400"
            _hover={{ bg: "primary.500" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
