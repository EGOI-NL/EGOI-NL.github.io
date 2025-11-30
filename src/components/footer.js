import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react'

import { ColorModeImage } from '@/components/ColorModeImage'
import { Image, Link } from '@/components/mdx'
import { footerItems } from '@/data/footer-items'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'bold'} my={2}>
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      as='footer'
    >
      <Container maxW='container.lg' my={8} centerContent>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 2, md: 8 }}
        >
          <Stack spacing={6}>
            <Box>
              <ColorModeImage
                w={32}
                lightSrc={'/assets/logo.png'}
                darkSrc={'/assets/logo.png'}
                alt={'Girls @ Informatica Olympiade logo'}
              />
            </Box>

            <Text fontSize={'sm'}>
              © {new Date().getFullYear()}, Girls @ Informatica Olympiade. Apache 2.0
              Licensed.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Leer programmeren</ListHeader>
            {footerItems.kolom1.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  fontSize={'sm'}
                  _hover={{ color: 'blue.500' }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>EGOI</ListHeader>
            {footerItems.kolom2.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  fontSize={'sm'}
                  _hover={{ color: 'blue.500' }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Organisatie</ListHeader>
            {footerItems.kolom3.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  fontSize={'sm'}
                  _hover={{ color: 'blue.500' }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
