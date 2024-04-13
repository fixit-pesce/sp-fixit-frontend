import {Flex} from "@chakra-ui/react"

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <Flex
      w = "100vw"
      h = "100vh"
      justifyContent = "center"
      alignItems = "center"
      bgGradient = "linear(to-br, secondary.400, primary.900)"
      >
      {children}
    </Flex>
  )
}