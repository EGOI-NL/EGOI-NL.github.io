import { Layout } from '@/components/layout'
import { Image, Link } from '@/components/mdx'
import { TeamMember } from '@/components/team-member'
import { OprichterTeamMembers, BestuurTeamMembers, OverigTeamMembers } from '@/data/team-members'
import { Box, Container, Heading, SimpleGrid, Text, Stack } from '@chakra-ui/react'

const Team = () => {
  return (
    <Layout
      title={'Team'}
      url={`team`}
    >
      <Box as='section' py={20}>
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' textAlign={'center'}>
            Het team
          </Heading>

          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'team/team.png'}
                alt='De vrijwilligers van Girls @ Informatica Olympiade'
                objectFit='contain'
                mt={10}
              ></Image>
            }

          </Stack>


        </Container>
      </Box>

    </Layout>
  )
}

export default Team
