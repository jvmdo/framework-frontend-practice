import { styled } from '../../styles/stitches.config'
import BackgroundMobile from '../../assets/mobile-background.svg'
import BackgroundDesktop from '../../assets/desktop-background.svg'
import { LotteryName } from '../../constants/lottery-names'
import { spinnerStyles } from '../../components/Spinner'

export const PageTemplateContainer = styled('div', {
  minHeight: '100dvh',

  display: 'grid',
  gridAutoRows: 'auto 1fr min-content',
  gap: '5rem',

  textAlign: 'center',

  $$paddingInline: '2rem',

  '@lg': {
    gridAutoColumns: 'auto 1fr',
    gridAutoRows: '1fr auto',
    gridTemplateAreas: `
      'head main'
      'head foot'
    `,
    gap: 'unset',

    textAlign: 'unset',

    $$paddingBlock: '5.75rem',
    $$paddingInline: '6rem',
  },

  variants: {
    withSpinner: {
      true: {
        ...spinnerStyles,

        '&::after': {
          content: '',
          backgroundColor: 'color-mix(in srgb, $gray100, transparent 50%)',

          position: 'absolute',
          inset: 0,
          zIndex: 91,
        },
      },
    },
  },
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5rem',

  WebkitMaskImage: `url(${BackgroundMobile})`,
  maskImage: `url(${BackgroundMobile})`,
  WebkitMaskPosition: 'top center',
  maskPosition: 'top center',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'cover',
  maskSize: 'cover',

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

    '@lg': {
      flexDirection: 'row',
    },
  },

  '.fgroup': {
    p: {
      fontSize: '$xs',
      fontWeight: '$medium',

      marginBlockEnd: '0.75rem',
    },

    strong: { fontSize: '$lg' },
  },

  '@lg': {
    gridArea: 'head',

    alignItems: 'start',
    justifyContent: 'space-between',

    WebkitMaskImage: `url(${BackgroundMobile})`,
    maskImage: `url(${BackgroundDesktop})`,
    WebkitMaskPosition: 'center',
    maskPosition: 'center',

    height: '100dvh',
    paddingBlock: '$$paddingBlock',
    width: '38.3125rem',
  },

  variants: {
    raffle: {
      [LotteryName.MegaSena]: { backgroundColor: '$aquamarine' },
      [LotteryName.Quina]: { backgroundColor: '$purple' },
      [LotteryName.Lotofacil]: { backgroundColor: '$pink' },
      [LotteryName.Lotomania]: { backgroundColor: '$orange' },
      [LotteryName.Timemania]: { backgroundColor: '$green' },
      [LotteryName.DiaDeSorte]: { backgroundColor: '$khaki' },
    },
  },

  defaultVariants: {
    raffle: LotteryName.MegaSena,
  },
})

export const Main = styled('main', {
  alignSelf: 'center',

  marginBlockStart: '-5rem',
  paddingInline: '$$paddingInline',

  ol: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: '1.75rem 1.5rem',
  },

  '@lg': {
    gridArea: 'main',

    marginBlockStart: '6.75rem',
    paddingInlineStart: 'unset',

    ol: { columnGap: '2.25rem' },
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

  '@lg': { width: '7rem' },
})

export const Footer = styled('footer', {
  fontSize: '$xs',
  lineHeight: '$foot',

  maxWidth: '42ch',

  marginBlockEnd: '2.5rem',
  marginInline: 'auto',
  paddingInline: '$$paddingInline',

  '@lg': {
    gridArea: 'foot',

    textAlign: 'center',

    maxWidth: 'unset',

    marginBlockEnd: '$$paddingBlock',
    paddingInlineStart: 'unset',
  },
})
