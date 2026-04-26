import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import '@fontsource-variable/inter'


const fonts = {
  body: "'Neue Haas', 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  heading: "'Champ Black', 'Inter Variable', 'Work Sans', system-ui, sans-serif",
}

export const customTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.blue },
    fonts: fonts,
    styles: {
      global: {
        html: { scrollBehavior: 'smooth' },
        // Import custom font CSS
        '@import': "/assets/fonts.css",
        'h1, h2, h3, h4, h5, h6': {
          color: 'gray.600',
        },
      },
    },
  },
  theme,
)
