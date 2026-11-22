import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { PageHeading } from '@/components/page-heading'
import {
  Box,
  Button,
  Container,
  Link as ChakraLink,
  Table,
  Text,
} from '@chakra-ui/react'

const Cursus = () => {
  const orangeBg = 'orange.100'
  return (
    <Layout title='Cursus' url='/cursus'>
      <Box as='section' py={20}>
        <Container maxW='1024px'>
          <PageHeading textAlign={'center'}>
            Cursusjaar 2026-2027
          </PageHeading>

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
          <Box overflowX="auto" w="100%" pt={10}>
            <Table.Root size="md" tableLayout="fixed">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader
                    colSpan={2}
                    textAlign="center"
                    fontSize="2xl"
                    fontWeight="extrabold"
                    bg="gray.100"
                    py={4}
                  >
                    Planning cursusjaar 2026/2027
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row bg={orangeBg}>
                  <Table.Cell width="30%">Zaterdag 26 sep 2026</Table.Cell>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">
                    Trainingsdag van 10:00 - 16:00 in het witte kerkje op de Kampstraat in Baarn.
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">Zaterdag 21 nov 2026</Table.Cell>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">Trainingsdag van 10:00 - 16:00 op het Metis Montessori college in Amsterdam.</Table.Cell>
                </Table.Row>

                <Table.Row bg={orangeBg}>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">Vrijdag 15 en zaterdag 16 jan 2027</Table.Cell>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">Trainingsweekend van vrijdag 10:00 tot zaterdag 15:00. Locatie komt nog.</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>jan 2027</Table.Cell>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">
                    Deadline voor de opgaves van de 1e ronde van de Nederlandse
                    Informatica Olympiade. Wil je kans maken om mee te gaan naar de
                    EGOI 2027 dan moet je genoeg punten in de 1e ronde hebben zodat je
                    door bent naar de 2e ronde.
                    <br /><br />
                    Deelname aan de Nederlandse Informatica Olympiade is niet
                    verplicht, dit is alleen als je dit leuk vindt en kans wil maken
                    om mee te gaan naar de EGOI 2027.
                  </Table.Cell>
                </Table.Row>

                <Table.Row bg={orangeBg}>
                  <Table.Cell>feb/mrt 2027</Table.Cell>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">
                    De 2e ronde van de Nederlandse Informatica olympiade. De 4 beste
                    meiden in deze ronde vertegenwoordigen Nederland op de EGOI 2027.
                    <br /><br />
                    Deelname is alleen voor de meiden die meegedaan hebben aan de 1e
                    ronde en door zijn naar de 2e ronde.
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell whiteSpace="normal" wordBreak="break-word">TBA</Table.Cell>
                  <Table.Cell>Overige trainingen 2027 worden nog gepland.</Table.Cell>
                </Table.Row>

                <Table.Row bg={orangeBg}>
                  <Table.Cell>TBA</Table.Cell>
                  <Table.Cell>European Girls Olympiad in Informatics 2027 in Polen.</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>25 t/m 27 juni 2027</Table.Cell>
                  <Table.Cell>Western European Olympiad in Informatics 2027 in Spanje.</Table.Cell>
                </Table.Row>
                <Table.Row bg={orangeBg}>
                  <Table.Cell>12 t/m 19 sep 2027</Table.Cell>
                  <Table.Cell>International Olympiad in Informatics 2027 in Duitsland.</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Cursus
