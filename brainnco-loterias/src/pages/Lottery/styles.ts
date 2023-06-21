import { styled } from '../../styles/stitches.config'
import { LotteryName } from '../../constants/lottery-names'
import { spinnerStyles } from '../../components/Spinner'

export const LotteryContainer = styled('div', {
  minHeight: '100dvh',

  display: 'grid',
  gridAutoRows: 'max-content 1fr min-content',
  gap: '5rem',

  textAlign: 'center',

  $$paddingInline: 'clamp(2.5rem, -0.357rem + 14.29vw, 12.5rem)',

  '@lg': {
    gridAutoColumns: 'max-content 1fr',
    gridAutoRows: '1fr min-content',
    gridTemplateAreas: `
      'head main'
      'head foot'
    `,
    gap: '2.5rem 0 ',

    textAlign: 'unset',

    $$paddingBlock: '5.75rem',
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
  justifyContent: 'space-between',
  gap: '5rem',

  color: '$white',
  textTransform: 'uppercase',

  '.lottery--name': {
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

  '.lottery--info': {
    p: {
      fontSize: '$xs',
      fontWeight: '$medium',

      marginBlockEnd: '0.75rem',
    },

    strong: { fontSize: '$lg' },
  },

  paddingBlock: '7vmax',
  paddingInline: '$$paddingInline',

  position: 'relative',
  overflow: 'hidden',

  // Reversed semi-circular border
  '&::before': {
    content: '',
    backgroundColor: '$gray100',
    borderRadius: '50%',

    $$height: 'clamp(4.5rem, 2.833rem + 8.33vw, 8rem)',
    height: '$$height',
    width: '120vw',

    position: 'absolute',
    insetInline: '50%',
    insetBlockEnd: 'calc(-0.75 * $$height)',
    transform: 'translateX(-50%)',

    '@lg': {
      height: '110vh',
      width: '25vw',

      insetBlock: '50%',
      insetInline: 'auto -12.5vw',
      transform: 'translate(0, -50%)',
    },
  },

  '@lg': {
    gridArea: 'head',

    alignItems: 'start',
    justifyContent: 'space-between',

    height: '100dvh',
    minWidth: '38.3125vw',
    paddingBlock: '$$paddingBlock',
    paddingInline: `clamp(3rem, -1.895rem + 7.89vw, 6rem) clamp(3.5rem, -1.395rem + 7.89vw, 6.5rem)`,

    '.lottery--name': {
      marginBlockEnd: 'clamp(0rem, -6rem + 13.33vh, 3rem)',
      width: 'max(31.0625vw, 25rem)',
    },

    position: 'sticky',
    insetBlockStart: 0,
  },

  variants: {
    color: {
      [LotteryName.MegaSena]: { backgroundColor: '$aquamarine' },
      [LotteryName.Quina]: { backgroundColor: '$purple' },
      [LotteryName.Lotofacil]: { backgroundColor: '$pink' },
      [LotteryName.Lotomania]: { backgroundColor: '$orange' },
      [LotteryName.Timemania]: { backgroundColor: '$green' },
      [LotteryName.DiaDeSorte]: { backgroundColor: '$khaki' },
    },
  },

  defaultVariants: {
    color: LotteryName.MegaSena,
  },
})

export const Main = styled('main', {
  alignSelf: 'center',

  paddingInline: '$$paddingInline',

  ol: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: '1.75rem 1.5rem',
  },

  '@lg': {
    gridArea: 'main',

    marginInlineStart: '-4rem',

    paddingBlockStart: '$$paddingBlock',
    paddingInline: '0 clamp(2.5rem, -4.842rem + 11.84vw, 7rem)',

    ol: { columnGap: '2.25rem' },

    zIndex: 90,
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

  marginBlockEnd: '2rem',
  paddingInline: '$$paddingInline',

  '@lg': {
    gridArea: 'foot',

    textAlign: 'center',

    maxWidth: 'unset',

    marginBlockEnd: 'clamp(2rem, -5.5rem + 16.67vmin, 5.75rem)',
    paddingInline: '0 clamp(1.5rem, -2.579rem + 6.58vw, 4rem)',
  },
})
