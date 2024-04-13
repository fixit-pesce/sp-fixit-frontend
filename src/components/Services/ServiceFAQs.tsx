import {
  Box,
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

interface ServiceFAQsProps {
  sp_username: string
  service_name: string
}

export default function ServiceFAQs({sp_username, service_name}: ServiceFAQsProps) {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const {data} = useQuery<[FAQ]>({
    queryKey: ["services", sp_username, service_name, "faqs"],
    queryFn: () => getServiceFAQs(sp_username, service_name)
  })

  return (
    <Box>
      <Box textAlign = "right" my = "4">
        <Button bg = "primary.400" color = "foreground" _hover = {{bg: "primary.500"}} onClick = {onOpen}>Add FAQ</Button>
      </Box>
      <Accordion>
        {data && data.map(faq => (
          <AccordionItem>
            <AccordionButton>
              <Text fontWeight = "bold" p = "2">{faq.question}</Text>
              <AccordionIcon/>
            </AccordionButton>
            <AccordionPanel>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <AddFAQModal isOpen = {isOpen} onClose = {onClose}/>
    </Box>
  )
}
