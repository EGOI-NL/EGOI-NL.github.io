import {
  Box,
  Button,
  Container,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Layout } from '@/components/layout'
import { Link, mapping } from '@/components/mdx'
import { PageHeading } from '@/components/page-heading'
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
        <Container maxW='1024px' py={10}>
          <Box>
            <VStack paddingTop='30px' gap='2' alignItems='center'>
              <PageHeading textAlign={'center'} my={4}>
                {frontmatter.title}
              </PageHeading>
              <Text fontSize={'sm'} color={'gray.600'}>
                {formatDate(date)} ({distanceToNow(date)})
              </Text>

              <Separator my={2} />
            </VStack>
            <br />
            <MDXRemote {...source} components={mapping} />
          </Box>

          <Button
            my={8}
            as={Link}
            href={'/blog'}
            variant={'outline'}
            colorPalette={'blue'}
          >
            <FiArrowLeft />
            Back to Blog
          </Button>
          <Separator my={8} />
          <br />
        </Container>
      </Box>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: getAllPostsIds(),
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
