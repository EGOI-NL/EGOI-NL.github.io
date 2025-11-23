import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box as='section'>
      <Container maxW='container.lg' pt={24} pb={2} centerContent>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                Girls @ Informatica Olympiade
              </Text>
            </Heading>
            <Text fontSize={'lg'}>
                We zijn onderdeel van de stichting informatica olympiade.

                Een aantal keer per jaar geven we een gratis programmeercursus voor meisjes op de middelbare school.
                Alle niveaus zijn welkom. Tijdens de cursus leer je de basis van programmeren in C++.

                Als je dat leuk vindt dan helpen we je verder met competitief programmeren, zodat je kans kunt maken om mee te doen aan de European Girls Olympiad in Informatics.
            </Text>
          </Stack>
          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/assets/Programmeercursus.png'}
                alt='Drie meisjes die programmeren.'
                objectFit='contain'
              ></Image>
            }

          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
