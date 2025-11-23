import { Box, Container } from '@chakra-ui/react'
import { Heading } from '@/components/mdx'
import React from 'react'

export const VideoDemo = () => {
  return (
    <Box id={'video-demo'} as='section' my={12}>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl' mb={4}>
          {/* HEADING TOEVOEGEN? */}
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
            src='https://www.youtube.com/watch?v=3UR5k_gTQPw'
            title='EGOI bij Science Makers Lab 2021'
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </Box>
  )
}
