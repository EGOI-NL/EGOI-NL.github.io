import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { Box, Container, Heading, SimpleGrid, Text, Stack,
    Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Egoi = () => {
  return (
    <Layout title="Egoi" url="/egoi">
      <Box as="section" py={{ base: 12, md: 20 }}>
        <Container maxW="container.lg" py={6}>
          <Heading as="h1" size="2xl" textAlign="center" mb={6}>
            De European Girls Olympiad in Informatics
          </Heading>

          <Text fontSize="lg" mb={4} lineHeight="tall">
            De European Girls' Olympiad in Informatics (EGOI) is een programmeerwedstrijd voor meisjes en niet-binaire middelbare scholieren uit de hele wereld. De EGOI is een weeklang evenement, waarin naast de wedstrijddagen ook volop ruimte is voor sociale activiteiten om de meiden uit andere landen te leren kennen.
          </Text>

          <Text fontSize="lg" mb={4} lineHeight="tall">
            De EGOI 2025 was in Duitsland, ook Nederland heeft weer meegedaan met een team van 4 leerlingen. De hoogtepunten waren: de bronzen medaille voor Alina en de honourable mention voor Lenka, het samen oplossen van puzzels en spellen, de excursie naar Drachenfels, cadeautjes ruilen met andere landen, en karaoke zingen op de afterparty.
          </Text>

          <Text fontSize="lg" lineHeight="tall">
            De ervaringen van You-Han (Lenka), deelneemster aan EGOI 2023/2024/2025:<br />
            “Eerlijk gezegd: toen ik voor het eerst meedeed aan girls@informaticaolympiade.nl had ik nooit gedacht dat ik ooit naar de EGOI zou gaan. Ik vroeg me zelfs af of ik wel goed genoeg was in programmeren. Gelukkig kreeg ik op elke stap van de cursus tot de EGOI geweldige steun van de trainsters en mede-deelneemsters. Ik ben trots dat ik ben gegroeid van een complete beginner in de programmeertaal C++ naar het vertegenwoordigen van Nederland bij de EGOI en het behalen van de 6e plek in de NIO-finale. Proberen is de enige manier om erachter te komen hoe ver je kunt komen! Dus, voor elke leerling die van puzzels, logische uitdagingen en het oplossen van problemen houdt: Doe mee aan deze cursus!”
          </Text>
        </Container>
      </Box>

      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} px={{ base: 4, md: 0 }}>
        {[
          { src: '/egoi/FotoEGOI6.JPG', alt: 'Team NL op de EGOI' },
          { src: '/egoi/FotoEGOI2.JPG', alt: 'Team NL op de EGOI' },
          { src: '/egoi/FotoEGOI3.JPG', alt: 'Team NL op de EGOI' },
          { src: '/egoi/FotoEGOI4.JPG', alt: 'Team NL op de EGOI' },
          { src: '/egoi/FotoEGOI5.JPG', alt: 'Team NL op de EGOI' },
          { src: '/egoi/FotoEGOI1.JPG', alt: 'Team NL op de EGOI' }
        ].map(({ src, alt }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              objectFit="contain"
              maxW="100%"
              border="1px solid"
              borderColor="gray.300"
              borderRadius="md"
              boxShadow="sm"
              mx="auto"
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box as="section" textAlign="center" px={{ base: 4, md: 0 }} py={12} bg="purple.50">
        <Heading as="h2" size="lg" mb={8}>
          De EGOI teams van de afgelopen jaren
        </Heading>
        {[
          { src: '/egoi/egoi-team-2025.png', alt: 'Het 2025 EGOI-NL team' },
          { src: '/egoi/egoi-team-2024.png', alt: 'Het 2024 EGOI-NL team' },
          { src: '/egoi/egoi-team-2023.png', alt: 'Het 2023 EGOI-NL team' },
          { src: '/egoi/egoi-team-2022.png', alt: 'Het 2022 EGOI-NL team' },
          { src: '/egoi/egoi-team-2021.png', alt: 'Het 2021 EGOI-NL team' },
        ].map(({ src, alt }) => (
          <Image
            key={alt}
            src={src}
            alt={alt}
            objectFit="contain"
            mt={10}
            maxW={['100%', '400px', '600px']}
            mx="auto"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            boxShadow="sm"
          />
        ))}
      </Box>
    </Layout>
  )
}


export default Egoi
