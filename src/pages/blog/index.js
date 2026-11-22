import {
  Box,
  Container,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { Layout } from '@/components/layout'
import { Link } from '@/components/mdx'
import { PageHeading } from '@/components/page-heading'
import { distanceToNow, formatDate } from '@/lib/date-formatting'
import { getSortedPostsMetadata } from '@/lib/posts'

const SinglePost = ({ page }) => {
  const date = new Date(page.date)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Box textAlign='center' w='100%' my={{ base: 2, md: 4 }}>
        <Link href={`/blog/${page.id}`} fontSize='xl' fontWeight='bold'>
          {page.title}
        </Link>

        <Text fontSize='sm' color='gray.600' py={1}>
          {formatDate(date)} ({distanceToNow(date)})
        </Text>

        <Text lineClamp={3} py={1}>
          {page.summary}
        </Text>
      </Box>
    </motion.div>
  )
}

export default function Blog({ allPostsData }) {
  return (
    <Layout title='Blog | Girls @ Informatica Olympiade' url='/blog'>
      <Box as='section'>
        <Container maxW='1024px' py={20}>
          <PageHeading textAlign='center' my={4}>
            Blog
          </PageHeading>
          <Text color='gray.800' fontSize='lg' textAlign='center'>
            Nieuws en updates over de Girls @ Informatica Olympiade
          </Text>

          <Separator my={4} borderColor='gray.200' />

          <VStack gap={0} align='stretch'>
            {allPostsData.map((page, index) => (
              <Fragment key={page.id}>
                {index > 0 && <Separator borderColor='gray.200' />}
                <SinglePost page={page} />
              </Fragment>
            ))}
          </VStack>
          <Separator my={2} borderColor='gray.200' />
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      allPostsData: getSortedPostsMetadata(),
    },
  }
}
