import { Code } from '@/components/mdx/code'
import { Heading } from '@/components/mdx/heading'
import { Hr } from '@/components/mdx/hr'
import { Image } from '@/components/mdx/image'
import { Link } from '@/components/mdx/link'
import { Quote } from '@/components/mdx/quote'
import { Box, Text } from '@chakra-ui/react'

export const mapping = {
  h1: (props) => <Heading as='h1' my={4} {...props} />,
  h2: (props) => <Heading as='h2' fontSize={{ base: '2xl', md: '3xl' }} lineHeight={{ base: 1.33, md: 1.2 }} fontWeight='bold' {...props} />,
  h3: (props) => <Heading as='h3' fontSize='xl' lineHeight={1.2} fontWeight='bold' {...props} />,
  h4: (props) => <Heading as='h4' fontSize='md' lineHeight={1.2} fontWeight='bold' {...props} />,
  h5: (props) => <Heading as='h5' fontSize='md' lineHeight={1.2} fontWeight='bold' {...props} />,
  h6: (props) => <Heading as='h6' fontSize='sm' lineHeight={1.2} fontWeight='bold' {...props} />,
  code: (props) => <Code {...props} />,
  br: (props) => <Box height='24px' {...props} />,
  hr: (props) => <Hr {...props} />,
  a: (props) => <Link color={'blue.400'} {...props} />,
  p: (props) => <Text as='p' my={4} lineHeight='tall' {...props} />,
  ul: (props) => <Box as='ul' pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as='ol' pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as='li' pb={1} {...props} />,
  blockquote: (props) => <Quote {...props} />,
  img: (props) => <Image {...props} alt={props.alt} />,
}
