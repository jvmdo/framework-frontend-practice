import { keyframes, styled } from '../styles/stitches.config'

const spinner = keyframes({
  to: { transform: 'rotate(360deg)' },
})

export const spinnerStyles = {
  position: 'fixed',
  inset: 0,

  '&::before': {
    content: '',

    border: '2px solid $colors$gray300',
    borderRadius: '50%',
    borderTopColor: '$gray500',

    blockSize: 'clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem)',
    inlineSize: 'clamp(1.25rem, 0.795rem + 2.27vw, 2.5rem)',
    margin: 'auto',

    position: 'absolute',
    inset: 0,
    zIndex: '92',

    animation: `${spinner} 0.6s linear infinite`,
  },
} as const

export const Spinner = styled('div', spinnerStyles)
