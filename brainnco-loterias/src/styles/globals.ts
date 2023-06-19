import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  'ol, ul': {
    listStyleType: 'none',
  },

  'img, svg': {
    maxWidth: '100%',
    verticalAlign: 'top',
  },

  html: {
    backgroundColor: '$gray100',
    color: '$gray500',
    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  body: {
    minHeight: '100dvh',
    minWidth: '20rem',
  },
})
