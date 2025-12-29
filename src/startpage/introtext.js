import { Box, Button, Container, Heading, Link as ChakraLink, HStack, Stack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Image } from '@/components/mdx'

export const IntroText = () => {
  return (
    <Box as='section'>
        <Container maxW='container.lg' pt={24} pb={2} centerContent px={4}>
          <Stack
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
          >
          <Stack flex={1} spacing={{ base: 8, md: 10 }}>
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
                Alle niveaus zijn welkom, of je nu beginner bent of al vergevorderd.
            </Text>
            <Text fontSize={'lg'}>
                Tijdens de cursus leer je programmeren in C++. Ook leer je over algoritmes waarmee je uitdagende puzzels oplost.

                Als je dat leuk vindt dan helpen we je verder met competitief programmeren, zodat je kans kunt maken om mee te doen aan de European Girls Olympiad in Informatics.
            </Text>
          </Stack>
          <Stack flex={1} spacing={{ base: 10, md: 20 }} maxW={{ base: '100%', md: 'auto' }}>
            <Image
              src={'/assets/Programmeercursus.png'}
              alt='Drie meisjes die programmeren.'
              objectFit='contain'
              maxW='100%'
              height='auto'
            />

            <Stack spacing={4} direction={{ base: 'column', md: 'row' }} align="center" justify="center" pt={6}>
              <Button
                as={ChakraLink}
                variant="outline"
                colorScheme="orange"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfuHpQAI3VHwNxXhidyIdaktSj3SgYxGZk0Lwz_SH75LJVd1w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                flex="1 1 auto"
                minW={0}
                w={{ base: '100%', md: 'auto' }}
              >
                Meld je aan!
              </Button>

              <Button
                as={ChakraLink}
                href="https://www.linkedin.com/company/egoi-nederland"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaLinkedin />}
                bg="#0A66C2"
                color="white"
                _hover={{ bg: '#004182' }}
                flex="1 1 auto"
                minW={0}
                w={{ base: '100%', md: 'auto' }}
              >
                LinkedIn
              </Button>

              <Button
                as={ChakraLink}
                href="https://www.instagram.com/egoi_nl/"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaInstagram />}
                bg="#E1306C"
                color="white"
                _hover={{ bg: '#AD255F' }}
                flex="1 1 auto"
                minW={0}
                w={{ base: '100%', md: 'auto' }}
              >
                Instagram
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

