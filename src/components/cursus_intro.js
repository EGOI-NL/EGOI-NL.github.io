import {
  Box,
  Container,
  Image,
  Link,
  Text,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'

export const CursusIntro = () => {
  return (
    <Box id={'cursus'} as='section'>
      <Container maxW='container.lg'>
        <Heading as='h1' size='2xl'>
          Leer programmeren
        </Heading>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={3} spacing={{ base: 5, md: 10 }}>
            <Text fontSize={'lg'}>
              Ongeveer vier keer per jaar organiseren we een cursusdag. Dit kan op een vrijdag, zaterdag of zondag zijn. Soms is het zelfs een tweedaags evenement met een overnachting in een jeugdherberg. Meestal zijn de cursusdagen in Utrecht, maar er is geen vaste locatie - ze kunnen door het hele land plaatsvinden.
            </Text>

            <Text fontSize={'lg'}>
              Op een cursusdag komen meestal zo'n 15 tot 25 leerlingen uit het hele land. Sommigen doen al langer mee, anderen komen voor de eerste keer. Dat maakt niet uit: iedereen werkt op haar eigen niveau en tempo. Je werkt alleen of samen aan de opdrachten in ons lesmateriaal.
De cursus is gratis. Wij zorgen voor snacks, drinken en een lunch.
            </Text>
          </Stack>
          <Stack flex={2} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/cursus/cursus.png'}
                alt='Een cursusdag.'
                objectFit='contain'
              ></Image>
            }

          </Stack>
        </Stack>
        <Stack
          direction="column"
          alignItems="flex-start"
          pt={10}
        >
          <Text fontSize={'lg'}>
            We hebben ons eigen lesmateriaal ontwikkeld, dat door iedereen gebruikt kan worden.
          </Text>
          <Text fontSize={'lg'}>
            Check{' '}
                <Link
                  href='https://girls.gitbook.io/c++-cursus'
                  color='blue.500'
                  isExternal
                >
                  hier voor de C++ cursus.
                </Link>{' '}
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
