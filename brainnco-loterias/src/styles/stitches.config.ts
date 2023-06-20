import { createStitches } from '@stitches/react'

export const { styled, globalCss, keyframes, config } = createStitches({
  theme: {
    fonts: {
      default: 'Montserrat, system-ui, Helvetica',
    },

    fontSizes: {
      xs: '0.875rem',
      sm: '0.9375rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.6875rem',
      xxl: '1.875rem',
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },

    lineHeights: {
      base: '122%',
      foot: '147%',
    },

    colors: {
      black: '#000000',
      white: '#FFFFFF',

      gray100: '#EFEFEF',
      gray300: '#848484',
      gray500: '#333333',

      aquamarine: '#6BEFA3',
      purple: '#8666EF',
      pink: '#DD7AC6',
      orange: '#FFAB64',
      green: '#5AAD7D',
      khaki: '#BFAF83',
    },

    shadows: {
      select: '0px 2px 6px #0000000D',
    },
  },

  media: {
    sm: '(min-width: 36em)',
    md: '(min-width: 48em)',
    lg: '(min-width: 62em)',

    p: '(orientation: portrait)',
    l: '(orientation: landscape)',
  },
})
