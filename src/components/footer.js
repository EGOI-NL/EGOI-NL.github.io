import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'
import { footerItems } from '@/data/footer-items'


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'bold'} my={2} fontFamily="'Neue Haas', 'Inter Variable', 'Work Sans', system-ui, sans-serif">
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <Box
      bg={'gray.100'}
      color={'gray.700'}
      as='footer'
      fontFamily="'Neue Haas', 'Inter Variable', 'Work Sans', system-ui, sans-serif"
    >
      <Container maxW='container.lg' my={8} centerContent>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 2, md: 8 }}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                w={32}
                src={'/assets/logo.png'}
                alt={'Girls @ Informatica Olympiade logo'}
              />
            </Box>

            <Text fontSize={'sm'} fontFamily="'Neue Haas', 'Inter Variable', 'Work Sans', system-ui, sans-serif">
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
                  fontFamily="'Neue Haas', 'Inter Variable', 'Work Sans', system-ui, sans-serif"
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
