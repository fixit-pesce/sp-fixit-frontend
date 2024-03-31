import {Flex} from "@chakra-ui/react"

export default function Navbar({children} : {children: React.ReactNode}) {
  return (
    <Flex as = "header" bg = "secondary.950" boxShadow = "md" p = "4">
      {children}
    </Flex>
  )
}
