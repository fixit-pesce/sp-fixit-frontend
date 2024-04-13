import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from '././pages/ProfilePage'
import SignUpPage from './pages/SignUpPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDescriptionPage from './pages/ServiceDescriptionPage'
import PrivateRoutes from './utils/PrivateRoutes'

export default function App() {
  return (
    <Box>
      <Routes>
        <Route path = "/" element = {<LoginPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
        <Route element = {<PrivateRoutes/>}>
          <Route path = "/profile" element = {<ProfilePage />} />
          <Route path = "/services" element = {<ServicesPage />} />
          <Route path = "/services/:service_name" element = {<ServiceDescriptionPage/>} />
        </Route>
      </Routes>
    </Box>
  )
}
