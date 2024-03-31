import {Box} from "@chakra-ui/react"

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export default function BaseLayout({children}: BaseLayoutProps) {
  return (
    <Box bg = "background" h = "100vh">
      {children}
    </Box>
  )
}