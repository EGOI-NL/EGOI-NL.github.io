import {
  Box,
  Container,
  Image,
  Text,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'

export const EGOI = () => {
  return (
    <Box id={'egoi'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          European Girls Olympiad in Informatics
        </Heading>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={3} spacing={{ base: 5, md: 10 }}>
            <Text fontSize={'lg'}>
              De European Girls' Olympiad in Informatics (EGOI) is een programmeerwedstrijd voor meisjes en niet-binaire middelbare scholieren uit de hele wereld. De EGOI is een weeklang evenement, waarin naast de wedstrijddagen ook volop ruimte is voor sociale activiteiten om de meiden uit andere landen te leren kennen.
            </Text>
          </Stack>
          <Stack flex={2} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/egoi/egoi_team.png'}
                alt='Het EGOI team 2025.'
                objectFit='contain'
              ></Image>
            }

          </Stack>
        </Stack>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
          pt = {10}
        >
          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            <Image
              src={'/egoi/mascotte.jpg'}
              alt='Uil, de mascotte van het EGOI team.'
              objectFit='contain'
              maxH="300px"
            />
          </Stack>
          <Stack flex={5} spacing={{ base: 5, md: 10 }}>
            <Text fontSize={'lg'}>
              De EGOI 2025 was in Duitsland, ook Nederland heeft weer meegedaan met een team van 4 leerlingen. De hoogtepunten waren: de bronzen medaille voor Alina en de honourable mention voor Lenka, het samen oplossen van puzzels en spellen, de excursie naar Drachenfels, cadeautjes ruilen met andere landen, en karaoke zingen op de afterparty.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
