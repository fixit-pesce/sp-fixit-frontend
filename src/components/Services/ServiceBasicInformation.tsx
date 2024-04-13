import { useQuery } from "@tanstack/react-query"
import { getService } from "../../api/servicesApi"

import {
  Box,
  Heading,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text
} from "@chakra-ui/react"

import {Service} from "../../types";

interface ServiceBasicInformationProps {
  sp_username: string
  service_name: string
}

export default function ServiceBasicInformation({sp_username, service_name}: ServiceBasicInformationProps) {
  const {data} = useQuery<Service>({
    queryKey: ["services", sp_username, service_name],
    queryFn: () => getService(sp_username, service_name)
  })

  return (
    <Box>
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
        <Heading fontSize = "lg" mb = "2">Product Description</Heading>
        <Text>
          {data?.description}
        </Text>
      </Box>
    </Box>
  )
}
