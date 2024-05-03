import { useQuery } from "@tanstack/react-query"
import { Booking } from "../../types"
import { getServiceBooking } from "../../api/servicesApi"

import {
  Box,
  Table,
  Tbody,
  Td,
  Flex,
  Tr,
  Thead,
  Th,
  IconButton,
  useToast,
} from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa"
import axios from "axios"

interface BookedUsersProps {
  sp_username: string
  service_name: string
}

const approveBooking = async (booking_id: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/services/bookings/${booking_id}/approve`
  )
  return response.data
}

export default function Bookings({
  sp_username,
  service_name,
}: BookedUsersProps) {
  const { data } = useQuery<Booking[]>({
    queryKey: ["services", sp_username, service_name, "bookings"],
    queryFn: () => getServiceBooking(sp_username, service_name),
  })

  const toast = useToast()

  return (
    <Box>
      {data && (
        <Flex bg="gray.100" gap="2" flexDirection="column">
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Company Name</Th>
                <Th>Username</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Phone Number</Th>
                <Th>Payment Method</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((booking) => (
                <Tr>
                  <Td>{booking.company_name}</Td>
                  <Td>{booking.username}</Td>
                  <Td>{booking.category}</Td>
                  <Td>{booking.price}</Td>
                  <Td>{booking.phone_no}</Td>
                  <Td>{booking.payment_method["type"]}</Td>
                  <Td>{booking.status}</Td>
                  <Td>
                    {booking.status === "PENDING" && (
                      <IconButton
                        size="sm"
                        aria-label="Approve"
                        title="Approve booking"
                        icon={<FaCheck />}
                        colorScheme="green"
                        onClick={() => {
                          const res = approveBooking(booking.booking_id)
                          console.log(res)
                          toast({
                            title: "Booking approved successfully",
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                          })
                        }}
                      />
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      )}
    </Box>
  )
}
