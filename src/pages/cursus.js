import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { Box, Button, Container, Heading, Link as ChakraLink, SimpleGrid, Text, Stack,Table,Thead,Tbody,Tr,Th,Td,TableContainer,} from '@chakra-ui/react'

const Cursus = () => {
  const orangeBg = 'orange.100';
  return (
    <Layout
      title={'Cursus'}
      url={`/cursus`}
    >
      <Box as='section' py={20}>
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' textAlign={'center'}>
            Cursusjaar 2026-2027
          </Heading>

          <Text fontSize={'lg'} py={10}>
            Ongeveer vier keer per jaar organiseren we een cursusdag.
            Dit kan op een vrijdag, zaterdag of zondag zijn. Soms is het zelfs een tweedaags evenement met een overnachting in een jeugdherberg. Meestal zijn de cursusdagen in Baarn, maar ze kunnen door het hele land plaatsvinden.

          </Text>

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

          <Image
            src="/cursus/puzzel.png"
            alt="Aanmelden voor de cursus"
            mx="auto"
            my={6}
            borderRadius="md"
            shadow="md"
            maxW="600px"
            width="100%"
          />

          <Button
            as={ChakraLink}
            variant="outline"
            bg="orange.500"
            color="white"
            _hover={{ bg: 'orange.800' }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfuHpQAI3VHwNxXhidyIdaktSj3SgYxGZk0Lwz_SH75LJVd1w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            px={12}
            py={8}
            fontSize="xl"
            mx="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            maxW="800px"
          >
            Meld je aan!
          </Button>


          <TableContainer w="100%" pt={10}>
            <Table variant="simple" size="md" tableLayout="fixed">
              <Thead>
                <Tr>
                  <Th
                    colSpan={2}
                    textAlign="center"
                    fontSize="2xl"
                    fontWeight="extrabold"
                    bg="gray.100"
                    py={4}
                  >
                    Planning cursusjaar 2026/2027
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                  <Tr bg={orangeBg}>
                  <Td width="30%">Zaterdag 26 sep 2026</Td>
                  <Td whiteSpace="normal" wordBreak="break-word">
                    Trainingsdag van 10:00 - 16:00 in het witte kerkje op de Kampstraat in Baarn.
                  </Td>
                </Tr>

                <Tr>
                  <Td whiteSpace="normal" wordBreak="break-word">Zaterdag 21 nov 2026</Td>
                  <Td whiteSpace="normal" wordBreak="break-word">Trainingsdag van 10:00 - 16:00 op het Metis Montessori college in Amsterdam.</Td>
                </Tr>

                <Tr bg={orangeBg}>
                  <Td whiteSpace="normal" wordBreak="break-word">Vrijdag 15 en zaterdag 16 jan 2027</Td>
                  <Td whiteSpace="normal" wordBreak="break-word">Trainingsweekend van vrijdag 10:00 tot zaterdag 15:00. Locatie komt nog.</Td>
                </Tr>

                <Tr>
                  <Td>jan 2027</Td>
                  <Td whiteSpace="normal" wordBreak="break-word">
                    Deadline voor de opgaves van de 1e ronde van de Nederlandse
                    Informatica Olympiade. Wil je kans maken om mee te gaan naar de
                    EGOI 2027 dan moet je genoeg punten in de 1e ronde hebben zodat je
                    door bent naar de 2e ronde.
                    <br /><br />
                    Deelname aan de Nederlandse Informatica Olympiade is niet
                    verplicht, dit is alleen als je dit leuk vindt en kans wil maken
                    om mee te gaan naar de EGOI 2027.
                  </Td>
                </Tr>

                <Tr bg={orangeBg}>
                  <Td>feb/mrt 2027</Td>
                  <Td whiteSpace="normal" wordBreak="break-word">
                    De 2e ronde van de Nederlandse Informatica olympiade. De 4 beste
                    meiden in deze ronde vertegenwoordigen Nederland op de EGOI 2027.
                    <br /><br />
                    Deelname is alleen voor de meiden die meegedaan hebben aan de 1e
                    ronde en door zijn naar de 2e ronde.
                  </Td>
                </Tr>

                <Tr>
                  <Td whiteSpace="normal" wordBreak="break-word">TBA</Td>
                  <Td>Overige trainingen 2027 worden nog gepland.</Td>
                </Tr>

                <Tr bg={orangeBg}>
                  <Td>TBA</Td>
                  <Td>European Girls Olympiad in Informatics 2027 in Polen.</Td>
                </Tr>
                <Tr>
                  <Td>25 t/m 27 juni 2027</Td>
                  <Td>Western European Olympiad in Informatics 2027 in Spanje.</Td>
                </Tr>
                <Tr bg={orangeBg}>
                  <Td>12 t/m 19 sep 2027</Td>
                  <Td>International Olympiad in Informatics 2027 in Duitsland.</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

    </Layout>
  )
}


export default Cursus
