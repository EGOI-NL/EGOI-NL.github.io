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

const Nieuws = () => {
  return (
    <Layout title="Egoi" url="/egoi">
      <Box as="section" py={{ base: 12, md: 20 }}>
        <Container maxW="container.lg" py={6}>
          <Heading as="h1" size="2xl" textAlign="center" mb={6}>
            EGOI in het nieuws
          </Heading>
        </Container>
      </Box>

      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} px={{ base: 4, md: 0 }}>
          {[
            { src: '/nieuws/Nieuws0.png', alt: 'EGOI in het nieuws' },
            { src: '/nieuws/Nieuws1.png', alt: 'Team NL op de EGOI' },
            { src: '/nieuws/Nieuws2.png', alt: 'Team NL op de EGOI' },
          ].map(({ src, alt }) => (
            <Box key={alt} border="1px solid" borderColor="gray.300" borderRadius="md" boxShadow="sm" overflow="hidden" mx="auto" maxW="100%">
              <Image
                src={src}
                alt={alt}
                objectFit="cover"
                w="100%"
                h="600px"
                display="block"
                // zonder marge/padding om discrepanties te vermijden
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  )
}


export default Nieuws
