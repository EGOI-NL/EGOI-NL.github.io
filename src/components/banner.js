import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react'

export const Banner = ({ title, description, children }) => {
  const {
    isOpen: isVisible,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Box pt={16} px={5} >
      <Alert
        status='info'
        variant='solid'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        bg="orange.500"
      >
        <AlertIcon />

        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        {children}

      </Alert>
    </Box>
  ) : (
    <></>
  )
}
