import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Layout } from '@/components/layout'
import { Link, mapping } from '@/components/mdx'
import { distanceToNow, formatDate } from '@/lib/date-formatting'
import { getAllPostsIds, getPostData } from '@/lib/posts'

export default function Post({ source, frontmatter, postId }) {
  const date = new Date(frontmatter.date)

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.summary}
      url={`/blog/${postId}`}
    >
      <Box as={'section'}>
        <Container maxW='container.lg' py={10}>
          <Box>
            <VStack paddingTop='30px' spacing='2' alignItems='center'>
              <Heading as={'h1'} textAlign={'center'} size='xl' my={4}>
                {frontmatter.title}
              </Heading>
              <Text fontSize={'sm'} color={'gray.600'}>
                {formatDate(date)} ({distanceToNow(date)})
              </Text>

              <Divider my={2} />
            </VStack>
            <br></br>
            <MDXRemote {...source} components={mapping} />
          </Box>

          <Button
            my={8}
            as={Link}
            href={'/blog'}
            variant={'outline'}
            leftIcon={<ArrowBackIcon />}
            colorScheme={'blue'}
          >
            Back to Blog
          </Button>
          <Divider my={8} />
          <br />
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  const filePath = path.join(process.cwd(), 'src/posts', postData.file)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)

  return { props: { source: mdxSource, frontmatter: data, postId: params.id } }
}
