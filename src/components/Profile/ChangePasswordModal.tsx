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
  useToast,
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

  const toast = useToast()

  const passwordMutation = useChangePasswordMutation(sp_username)

  const handleSubmit = () => {
    passwordMutation.mutate(
      { current_password: old, new_password: newP },
      {
        onSuccess: () => {
          toast({
            title: "Password changed successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
          onClose()
        },
        onError: () => {
          toast({
            title: "Error changing password",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        },
      }
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
        <ModalFooter justifyContent="center" gap="4">
          <Button colorScheme="green" onClick={handleSubmit}>
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
