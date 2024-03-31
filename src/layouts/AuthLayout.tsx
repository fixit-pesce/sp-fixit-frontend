import {Flex} from "@chakra-ui/react"

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({children}: AuthLayoutProps) {
  return (
    <Flex
      w = "100vw"
      h = "100vh"
      bg = "primary"
      justifyContent = "center"
      alignItems = "center"
      bgGradient = "linear(to-br, primary.400, secondary.950)"
      >
      {children}
    </Flex>
  )
}