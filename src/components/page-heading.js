import { Heading } from '@chakra-ui/react'

export const PageHeading = (props) => (
  <Heading
    as='h1'
    fontSize={{ base: '4xl', md: '5xl' }}
    lineHeight={{ base: 1.2, md: 1 }}
    fontWeight='bold'
    {...props}
  />
)
