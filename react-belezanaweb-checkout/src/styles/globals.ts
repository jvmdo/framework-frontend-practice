import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    outlineColor: theme.colors.primary,
    boxSizing: 'border-box',
  },

  html: {
    backgroundColor: theme.colors.background,
    colorScheme: 'light dark',
    fontFamily: theme.font.family.primary,
    fontSynthesis: 'none',
    fontWeight: theme.font.weight.regular,
    textRendering: 'optimizeLegibility',
  },

  body: {
    color: theme.colors.black,
    lineHeight: theme.font.height.body,
    letterSpacing: theme.font.spacing.regular,
    minHeight: '100dvh',
    minWidth: '20rem',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
    textDecorationSkipInk: 'none',
  },

  button: {
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
  },

  input: {
    border: 'none',
    font: 'inherit',
  },

  list: {
    listStyleType: 'none',
  },

  ':where(img, svg)': {
    maxWidth: '100%',
    verticalAlign: 'top',
  },
}))