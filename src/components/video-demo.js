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
            src='https://player.vimeo.com/external/1133141624.m3u8?s=a41df2d90cbb06b09fb6d6584260f4b6399c3fe7&oauth2_token_id=58974900'
            title='Kinder Klimaat Concert Dag pitch'
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </Box>
  )
}
