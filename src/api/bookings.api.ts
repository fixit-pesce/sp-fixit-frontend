import { useMutation, useQueryClient } from "@tanstack/react-query"

import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
})

export const approveBooking = async (booking_id: string) => {
  const response = await api.post(
    `/service-providers/bookings/${booking_id}/approve`
  )
  return response.status
}

export const useApproveBookingMutation = (
  sp_username: string,
  service_name: string
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: approveBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services", sp_username, service_name, "bookings"],
      })
    },
  })
}

export const cancelBooking = async (booking_id: string) => {
  const response = await api.post(
    `/service-providers/bookings/${booking_id}/cancel`
  )
  return response.status
}

export const useCancelBookingMutation = (
  sp_username: string,
  service_name: string
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: cancelBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services", sp_username, service_name, "bookings"],
      })
    },
  })
}

export const completeBooking = async (booking_id: string) => {
  const response = await api.post(
    `/service-providers/bookings/${booking_id}/complete`
  )
  return response.status
}

export const useCompleteBookingMutation = (
  sp_username: string,
  service_name: string
) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: completeBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["services", sp_username, service_name, "bookings"],
      })
    },
  })
}
