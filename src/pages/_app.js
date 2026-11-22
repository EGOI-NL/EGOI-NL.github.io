import { customTheme } from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import '../../public/startpage/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
