import { Banner } from '@/components/banner'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Link } from '@/components/mdx'
import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

// Google Analytics
ReactGA.initialize('G-62W42QPRQC')

export const Layout = ({
  title,
  description,
  card,
  children,
  url = 'https://kinderklimaatconcertdag.nl',
  enableBanner = false,
}) => {
  // Track page views
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview' })
  }, [])

  const bannerTitle =
    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfuHpQAI3VHwNxXhidyIdaktSj3SgYxGZk0Lwz_SH75LJVd1w/viewform'>Meld je aan voor het cursusweekend op vrijdag 16 en zaterdag 17 januari 2026!</Link>
  const bannerDescription = ''

  // Determine the base URL based on the environment
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://kinderklimaatconcertdag.nl'
      : 'http://localhost:3000'

  return (
    <>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/assets/logo_no-text.png'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' href='/favicon.png' />

        <title>{title}</title>
      </Head>
      <Flex
        direction={'column'}
        justify={'space-between'}
        gap={0}
        minHeight={'100vh'}
      >
        <Box pt="20px">
          <Header />
          {enableBanner && (
            <Banner
              title={bannerTitle}
              description={bannerDescription}
            >
            </Banner>
          )}
          {children}
        </Box>

        <Footer />
      </Flex>
    </>
  )
}

export default Layout
