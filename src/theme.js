import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import '@fontsource-variable/inter'

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: {
          value:
            "'Neue Haas', 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        },
        heading: {
          value: "'Champ Black', 'Inter Variable', 'Work Sans', system-ui, sans-serif",
        },
      },
    },
  },
  globalCss: {
    html: { scrollBehavior: 'smooth' },
    'h1, h2, h3, h4, h5, h6': { color: 'gray.600' },
  },
})

export const customTheme = createSystem(defaultConfig, customConfig)
