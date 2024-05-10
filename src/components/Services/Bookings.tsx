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
import {
  useApproveBookingMutation,
  useCancelBookingMutation,
  useCompleteBookingMutation,
} from "../../api/bookings.api"

interface BookedUsersProps {
  sp_username: string
  service_name: string
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

  const approveMutation = useApproveBookingMutation(sp_username, service_name)
  const cancelMutation = useCancelBookingMutation(sp_username, service_name)
  const completeMutation = useCompleteBookingMutation(sp_username, service_name)

  const handleApproveBooking = (booking_id: string) => {
    approveMutation.mutate(booking_id, {
      onSuccess: () => {
        toast({
          title: "Booking approved",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      },
      onError(error) {
        toast({
          title: `Error: ${error.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      },
    })
  }

  const handleCancelBooking = (booking_id: string) => {
    cancelMutation.mutate(booking_id, {
      onSuccess: () => {
        toast({
          title: "Booking cancelled",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      },
      onError(error) {
        toast({
          title: `Error: ${error.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      },
    })
  }

  const handleCompleteBooking = (booking_id: string) => {
    completeMutation.mutate(booking_id, {
      onSuccess: () => {
        toast({
          title: "Booking completed",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      },
      onError(error) {
        toast({
          title: `Error: ${error.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      },
    })
  }

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
                      <>
                        <IconButton
                          size="sm"
                          aria-label="Approve"
                          title="Approve booking"
                          icon={<FaCheck />}
                          colorScheme="green"
                          onClick={() =>
                            handleApproveBooking(booking.booking_id)
                          }
                        />
                        <IconButton
                          size="sm"
                          aria-label="Cancel"
                          title="Cancel booking"
                          icon={<FaCheck />}
                          colorScheme="red"
                          onClick={() =>
                            handleCancelBooking(booking.booking_id)
                          }
                        />
                      </>
                    )}
                    {booking.status === "APPROVED" && (
                      <IconButton
                        size="sm"
                        aria-label="Complete"
                        title="Complete booking"
                        icon={<FaCheck />}
                        colorScheme="green"
                        onClick={() =>
                          handleCompleteBooking(booking.booking_id)
                        }
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
