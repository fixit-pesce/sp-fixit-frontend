import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react"

import { useParams } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import ServiceBasicInformation from "../components/Services/ServiceBasicInformation"
import ServiceReviews from "../components/Services/ServiceReviews"
import ServiceFAQs from "../components/Services/ServiceFAQs"
import Bookings from "../components/Services/Bookings"
import { MdDelete } from "react-icons/md"
import DeleteServiceModal from "../components/Services/DeleteServiceModal"

export default function ServiceDescriptionPage() {
  let { service_name } = useParams()
  service_name = service_name ? service_name : ""
  const sp_username: string =
    localStorage.getItem("sp_username") ?? ("" as string)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <BaseLayout>
      <Box
        bg="white"
        w="80%"
        mx="auto"
        boxShadow="lg"
        rounded="md"
        mt="10"
        p="8"
        position="relative"
      >
        <IconButton
          icon={<MdDelete />}
          aria-label="delete service"
          position="absolute"
          right="8"
          variant="outline"
          fontSize="2xl"
          onClick={onOpen}
          colorScheme="red"
        />
        <Heading textAlign="center" mb="6">
          {service_name}
        </Heading>
        <Tabs variant="enclosed-colored" isFitted>
          <TabList>
            <Tab>Basic Information</Tab>
            <Tab>Reviews</Tab>
            <Tab>FAQs</Tab>
            <Tab>Services Booked</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ServiceBasicInformation
                sp_username={sp_username}
                service_name={service_name}
              />
            </TabPanel>
            <TabPanel>
              <ServiceReviews
                sp_username={sp_username}
                service_name={service_name}
              />
            </TabPanel>
            <TabPanel>
              <ServiceFAQs
                sp_username={sp_username}
                service_name={service_name}
              />
            </TabPanel>
            <TabPanel>
              <Bookings sp_username={sp_username} service_name={service_name} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <DeleteServiceModal
        sp_username={sp_username}
        service_name={service_name}
        isOpen={isOpen}
        onClose={onClose}
      />
    </BaseLayout>
  )
}
