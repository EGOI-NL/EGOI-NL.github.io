import { Alert, Box } from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

export const Banner = ({ title, description, children }) => {
  return (
    <Box pt={16} px={5}>
      <Alert.Root
        status='info'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        bg='orange.500'
      >
        <Alert.Indicator>
          <FiInfo />
        </Alert.Indicator>

        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
        {children}
      </Alert.Root>
    </Box>
  )
}
