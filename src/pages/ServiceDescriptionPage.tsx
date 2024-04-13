import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react"

import { NavLink, useParams, useNavigate } from "react-router-dom"
import BaseLayout from "../layouts/BaseLayout"
import Navbar from "../components/Navbar/Navbar"
import { MdHandyman } from "react-icons/md"
import ServiceBasicInformation from "../components/Services/ServiceBasicInformation"
import ServiceReviews from "../components/Services/ServiceReviews"
import ServiceFAQs from "../components/Services/ServiceFAQs"


export default function ServiceDescriptionPage() {
  const navigate = useNavigate()

  let {service_name} = useParams()

  service_name = service_name ? service_name : ""

  const sp_username: string = localStorage.getItem("sp_username") ?? "" as string

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <BaseLayout>
      <Box bg = "white" w = "80%" mx = "auto" boxShadow = "lg" rounded = "md" mt = "10" p = "8">
        <Heading textAlign="center" mb = "6">{service_name}</Heading>
        <Tabs variant = "enclosed-colored" isFitted>
          <TabList>
            <Tab>Basic Information</Tab>
            <Tab>Reviews</Tab>
            <Tab>FAQs</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ServiceBasicInformation sp_username={sp_username} service_name={service_name}/>
            </TabPanel>
            <TabPanel>
              <ServiceReviews sp_username={sp_username} service_name={service_name}/>
            </TabPanel>
            <TabPanel>
              <ServiceFAQs sp_username={sp_username} service_name={service_name}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </BaseLayout>
  )
}
