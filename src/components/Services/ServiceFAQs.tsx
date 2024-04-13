import {
  Box,
  Flex,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure
} from '@chakra-ui/react'

import {FAQ} from "../../types"
import { getServiceFAQs } from '../../api/servicesApi'
import { useQuery } from '@tanstack/react-query'
import AddFAQModal from './AddFAQModal'
import DeleteVerificationModal from './DeleteVerificationModal'

interface ServiceFAQsProps {
  sp_username: string
  service_name: string
}

export default function ServiceFAQs({sp_username, service_name}: ServiceFAQsProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose} = useDisclosure()

  const {data} = useQuery<[FAQ]>({
    queryKey: ["services", sp_username, service_name, "faqs"],
    queryFn: () => getServiceFAQs(sp_username, service_name)
  })

  return (
    <Box>
      <Flex gap = "4" py = "2" justifyContent="end">
        <Button bg = "primary.400" color = "white" _hover = {{bg: "primary.500"}} onClick = {onOpen}>Add FAQ</Button>
        <Button bg = "red.500" color = "white" _hover = {{bg: "red.600"}} onClick = {onDeleteOpen}>Delete all FAQs</Button>
      </Flex>
      <Accordion>
        {data && data.map((faq, index) => (
          <AccordionItem key = {index}>
            <AccordionButton>
              <Text fontWeight = "bold" p = "2">{faq.question}</Text>
              <AccordionIcon/>
            </AccordionButton>
            <AccordionPanel>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <AddFAQModal isOpen = {isOpen} onClose = {onClose} sp_username={sp_username} service_name={service_name}/>
      <DeleteVerificationModal
        isOpen = {isDeleteOpen}
        onClose={onDeleteClose}
        sp_username={sp_username}
        service_name={service_name}/>
    </Box>
  )
}
