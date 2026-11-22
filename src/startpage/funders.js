import {
  Box,
  Container,
  Image,
  Text,
  Link,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import React from 'react'
import { Funders as data } from '@/data/funders'

import { Heading } from '@/components/mdx'

export const Funders = () => {
  const funders = React.useMemo(() => data, [])
  return (
    <Box id={'funders'} as='section'>
      <Container maxW='1024px' centerContent>
        <Heading as='h1'>
          Sponsors
        </Heading>

        <Box my={8}>
          <Text fontSize={'lg'}>
            Girls @ Informatica Olympiade wordt/werd ondersteund door
          </Text>
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: `repeat(${funders.length}, minmax(auto, max-content))` }}
              gap={6}
              my={4}
              justifyContent='center'
            >
            {funders.map((funder, index) => (
              <GridItem
                key={index}
                as={Link}
                href={funder.url}
                title={funder.name}
                display='flex'
                flexDir="column"
                alignItems='center'
                justifyContent='center'
                borderRight={
                  index < funders.length - 1 ? '1px solid #ccc' : 'none'
                }
                pr={4}
              >
                  <Image
                    src={funder.logo}
                    maxH={20}
                    alt={funder.name}
                  />
                <Text mt={2} fontSize="sm" textAlign="center">
                  {funder.jaren}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
