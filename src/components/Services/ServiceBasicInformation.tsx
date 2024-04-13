import { useQuery } from "@tanstack/react-query"
import { getCategories, getService } from "../../api/servicesApi"

import {
  Box,
  Button,
  Heading,
  Spacer,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure
} from "@chakra-ui/react"

import {Category, Service} from "../../types";
import EditServiceModal from "./EditServiceModal";
import { MdEdit } from "react-icons/md";

interface ServiceBasicInformationProps {
  sp_username: string
  service_name: string
}

export default function ServiceBasicInformation({sp_username, service_name}: ServiceBasicInformationProps) {
  const {data} = useQuery<Service>({
    queryKey: ["services", sp_username, service_name],
    queryFn: () => getService(sp_username, service_name)
  })

  const {data: categories} = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Box>
      <Box w = "100%" textAlign="right">
        <Button
          rightIcon = {<MdEdit/>}
          bg = "primary.400"
          color = "white"
          _hover = {{bg: "primary.500"}}
          onClick = {onOpen}
          >
            Edit
          </Button>
      </Box>
      <StatGroup textAlign = "center" my = "6">
        <Stat>
          <StatLabel>Price</StatLabel>
          <StatNumber>₹ {data?.price}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Average Rating</StatLabel>
          <StatNumber>{data?.avg_rating}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Bookings</StatLabel>
          <StatNumber>{data?.total_bookings}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Total Reviews</StatLabel>
          <StatNumber>{data?.total_reviews}</StatNumber>
        </Stat>
      </StatGroup>
      <Box>
        <Heading fontSize = "lg" mb = "2">Category</Heading>
        <Text>{data?.category}</Text>
        <Spacer h = "4"/>
        <Heading fontSize = "lg" mb = "2">Product Description</Heading>
        <Text>
          {data?.description}
        </Text>
      </Box>
      {categories && data && <EditServiceModal isOpen = {isOpen} onClose={onClose} categories={categories} service={data} sp_username={sp_username}/>}
    </Box>
  )
}
