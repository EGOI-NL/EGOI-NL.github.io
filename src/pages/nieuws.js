import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { Box, Container, Heading, SimpleGrid, Text, Stack,Table,head,Tbody,Tr,Th,Td,TableContainer,} from '@chakra-ui/react'

const Nieuws = () => {
  return (
    <Layout title="Egoi" url="/egoi">
      <Box as="section" py={{ base: 12, md: 20 }}>
        <Container maxW="container.lg" py={6}>
          <Heading as="h1" size="2xl" textAlign="center" mb={6}>
            EGOI in het nieuws
          </Heading>


      <Box>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={6} px={{ base: 4, md: 0 }}>
        {[
          { src: '/nieuws/Nieuws0.png', alt: 'EGOI in het nieuws' },
          { src: '/nieuws/Nieuws1.PNG', alt: 'Team NL op de EGOI' },
          { src: '/nieuws/Nieuws2.png', alt: 'Team NL op de EGOI' },
        ].map(({ src, alt }) => (
          <Box
            key={alt}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            boxShadow="sm"
            overflow="hidden"
            mx="auto"
            maxW="100%"
          >
          <Image
            src={src}
            alt={alt}
            objectFit={{ base: 'contain', md: 'cover' }}
            width="100%"
            height="auto"
            maxH={{ base: 'none', md: '400px' }}
            display="block"
          />
          </Box>
        ))}
      </SimpleGrid>
      </Box>
      <Box py = {20}>
      <Container maxW='container.lg' centerContent>
        <Heading as='h2' size='lg' mb={4}>
          EGOI bij Science Makers Lab 2021
        </Heading>
        <Box
          w='100%'
          maxW='800px'
          borderRadius='lg'
          overflow='hidden'
          boxShadow='md'
        >
        <iframe
          width='100%'
          height='450'
          src='https://www.youtube.com/embed/3UR5k_gTQPw'
          title='EGOI bij Science Makers Lab 2021'
          allowFullScreen
        ></iframe>
        </Box>
      </Container>
    </Box>
        </Container>
      </Box>
    </Layout>
  )
}


export default Nieuws
