import { useQuery } from "@tanstack/react-query"
import { Booking } from "../../types"
import { getServiceBooking } from "../../api/servicesApi"

import {
  Box,
  Table,
  Tbody,
  Td,
  Flex,
  Tr
} from "@chakra-ui/react"

interface BookedUsersProps{
    sp_username: string
    service_name: string
}

export default function BookedUsers({sp_username, service_name}: BookedUsersProps) {
  const {data} = useQuery<Booking[]>({
    queryKey: ["services", sp_username, service_name, "bookings"],
    queryFn: () => getServiceBooking(sp_username, service_name)
  })

  return (
    <Box>
      {data && data.map((booking, index) => (
        <Flex key = {index} bg = "gray.100" gap = "2" flexDirection = "column">
          <Table variant = 'striped' colorScheme = 'blue'>
            <Tbody>
              <Tr>
                <Td>Service Name</Td>
                <Td>{booking.service_name}</Td>
              </Tr>
              <Tr>
                <Td>Company Name</Td>
                <Td>{booking.company_name}</Td>
              </Tr>
              <Tr>
                <Td>Category</Td>
                <Td>{booking.category}</Td>
              </Tr>
              <Tr>
                <Td>Price (₹)</Td>
                <Td>{booking.price}</Td>
              </Tr>
              <Tr>
                <Td>Username</Td>
                <Td>{booking.username}</Td>
              </Tr>
              <Tr>
                <Td>Phone number</Td>
                <Td>{booking.phone_no}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      ))}
    </Box>
  )
}
