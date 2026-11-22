import { Box } from '@chakra-ui/react'

export const Quote = (props) => {
  return (
    <Box
      as='blockquote'
      mt={4}
      w='98%'
      bg='blue.50'
      borderLeftWidth='4px'
      borderColor='blue.500'
      pl={4}
      py={2}
      {...props}
    />
  )
}
