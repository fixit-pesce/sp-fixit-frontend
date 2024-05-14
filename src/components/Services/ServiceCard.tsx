import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Flex,
  Tag,
} from "@chakra-ui/react"

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

const starsFromRating = (rating: number) => {
  if (rating < 0 || rating > 5) {
    return [0, 0, 0]
  }
  const roundedRating = Math.round(rating * 2) / 2
  let full = 0,
    half = 0,
    empty = 0

  full = Math.floor(roundedRating)
  half += roundedRating % 1 === 0.5 ? 1 : 0
  empty = 5 - full - half
  return [full, half, empty]
}

interface ServiceProps {
  id: string
  name: string
  service_provider: string
  description: string
  avg_rating: number
}

export default function ServiceCard(props: ServiceProps) {
  const [full, half, empty] = starsFromRating(props.avg_rating)

  return (
    <Card w="md">
      <CardHeader textAlign="center">
        <Heading size="lg" mb="2">
          {props.name}
        </Heading>
        <Heading size="md">{props.service_provider}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{props.description}</Text>
        <Flex
          gap="1"
          justifyContent="center"
          alignItems="center"
          p="2"
          color="yellow.400"
        >
          <Tag color="white" bg="secondary.400" mr="2">
            {props.avg_rating}
          </Tag>
          {[...Array(full)].map((_, i) => (
            <FaStar key={i} />
          ))}
          {[...Array(half)].map((_, i) => (
            <FaStarHalfAlt key={i} />
          ))}
          {[...Array(empty)].map((_, i) => (
            <FaRegStar key={i} />
          ))}
        </Flex>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button
          bg="secondary.400"
          color="white"
          _hover={{ bg: "secondary.500" }}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  )
}
