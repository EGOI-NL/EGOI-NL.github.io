import { Layout } from '@/components/layout'
import { Image } from '@/components/mdx'
import { Box, Button, Container, Heading, HStack, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <Layout
      title={'Contact'}
      url={`/contact`}
    >
      <Box as='section' py={20}>
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' textAlign={'center'}>
            Contact
          </Heading>
          <Text fontSize={'lg'} py={10} textAlign="center">
            Wij zijn onderdeel van de stichting informatica olympiade.<br />
            Je kan ons bereiken op:{' '}
            <ChakraLink href="mailto:girls@informaticaolympiade.nl" color="orange.500" textDecoration="underline">
              girls@informaticaolympiade.nl
            </ChakraLink>
          </Text>

          {/* Meld je aan - sectie */}
          <Box textAlign="center" mb={12}>
            <Text fontSize="lg" mb={4} fontWeight="semibold">
              Wil je meedoen? Geef je dan snel op!
            </Text>
            <Button
              as={ChakraLink}
              variant="outline"
              colorScheme="orange"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfuHpQAI3VHwNxXhidyIdaktSj3SgYxGZk0Lwz_SH75LJVd1w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Meld je aan!
            </Button>
          </Box>

          {/* Socials - sectie */}
          <Box textAlign="center" mb={12}>
            <Text fontSize="lg" mb={4} fontWeight="semibold">
              Je kan ons vinden op:
            </Text>
            <HStack spacing={6} justify="center">
              <Button
                as={ChakraLink}
                href="https://www.linkedin.com/company/egoi-nederland"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaLinkedin />}
                bg="#0A66C2"
                color="white"
                _hover={{ bg: '#004182' }}
                size="lg"
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
                size="lg"
              >
                Instagram
              </Button>
            </HStack>
          </Box>

          {/* Tekst boven afbeelding */}
          <Box textAlign="center" mb={6}>
            <Text fontSize="xl" fontWeight="bold">
              De vrijwilligers van Girls @ Informatica Olympiade
            </Text>
          </Box>

          {/* Afbeelding */}
          <Stack flex={1} spacing={{ base: 10, md: 20 }} align="center">
            <Image
              src={'/team/team.png'}
              alt='De vrijwilligers van Girls @ Informatica Olympiade'
              objectFit='contain'
              mt={2}
              maxW="800px"      // iets grotere breedte
              width="100%"      // volledig binnen container
              maxH="600px"      // grotere hoogte indien mogelijk
            />
          </Stack>
        </Container>
      </Box>
    </Layout>
  )
}

export default Contact