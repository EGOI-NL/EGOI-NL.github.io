import { Alert, Box } from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

export const Banner = ({ title, description, children }) => {
  return (
    <Box pt={16} px={5}>
      <Alert.Root
        status='info'
        variant='solid'
        size='5xl'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        bg='orange.500'
        borderRadius={0}
        gap={0}
        py={3}
      >
        <Alert.Indicator w={5} h={6} me={3}>
          <FiInfo />
        </Alert.Indicator>

        <Alert.Title fontSize='3xl' fontWeight='bold' lineHeight={1.2} me={2}>{title}</Alert.Title>
        <Alert.Description lineHeight={6}>{description}</Alert.Description>
        {children}
      </Alert.Root>
    </Box>
  )
}
