import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    body: {
      color: {
        value: {
          dark: "green"
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