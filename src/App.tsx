import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from '././pages/ProfilePage'
import SignUpPage from './pages/SignUpPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDescriptionPage from './pages/ServiceDescriptionPage'

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path = "/" element = {<LoginPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
        <Route path = "/profile" element = {<ProfilePage />} />
        <Route path = "/services" element = {<ServicesPage />} />
        <Route path = "/services/:service_name" element = {<ServiceDescriptionPage/>} />
      </Routes>
    </Box>
  )
}
