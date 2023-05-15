import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      color: {
        value: {
          dark: "white"
        }
      }
    }
  },

  media: {
    xs: {
      value: "(min-width: 405px)"
    }
  }
})