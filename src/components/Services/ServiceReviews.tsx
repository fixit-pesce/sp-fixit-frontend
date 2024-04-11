import { Flex, Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getServiceReviews } from "../../api/servicesApi";
import { Review } from "../../types";
import RatingDisplay from "./RatingDisplay";


const convertDate = (dateString: string) => {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }

  const formattedDate = date.toLocaleString('en-US', options)
  return formattedDate
}


interface ServiceReviewsProps {
  sp_username: string
  service_name: string
}

export default function ServiceReviews({sp_username, service_name}: ServiceReviewsProps) {
  const {data} = useQuery<[Review]>({
    queryKey: ["services", sp_username, service_name, "rating"],
    queryFn: () => getServiceReviews(sp_username, service_name)
  })

  return (
    <Flex flexDir = "column" gap = "4">
      {data && data.map(review => (
        <Box boxShadow = "lg" bg = "blue.100">
          <Text p = "2">{review.username}</Text>
          <Flex alignItems="center" gap = "4"  p = "2">
            <RatingDisplay rating = {review.rating}/>
            <Text>{convertDate(review.created_at)}</Text>
          </Flex>
          <Text p = "2">{review.description}</Text>
        </Box>
      ))}
    </Flex>
  )
}
