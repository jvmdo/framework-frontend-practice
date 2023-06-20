import { styled } from '../../styles/stitches.config'
import BackgroundMobile from '../../assets/mobile-background.svg'

export const PageTemplateContainer = styled('div', {
  display: 'grid',
  gap: '5rem',

  textAlign: 'center',

  $$paddingInline: '2rem',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5rem',

  backgroundImage: `url(${BackgroundMobile})`,
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  color: '$white',
  textTransform: 'uppercase',

  paddingBlock: '4rem 8.25rem',
  paddingInline: '$$paddingInline',

  '.lgroup': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    alignItems: 'center',

    h1: { fontSize: '$xxl' },

    img: { width: '4rem' },
  },

  '.fgroup': {
    fontSize: '$xs',

    p: { fontWeight: '$medium' },
  },
})

export const Main = styled('main', {
  marginBlockStart: '-5rem',

  paddingInline: '$$paddingInline',

  ol: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: '1.75rem 1.5rem',
  },
})

export const Ball = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$white',
  borderRadius: '50%',

  fontSize: '$xl',
  fontWeight: '$bold',

  aspectRatio: 1,
  width: '4.75rem',
})

export const Footer = styled('footer', {
  fontSize: '$xs',
  lineHeight: '$foot',

  marginBlockEnd: '2.5rem',
  marginInline: 'auto',

  maxWidth: '42ch',

  paddingInline: '$$paddingInline',
})
