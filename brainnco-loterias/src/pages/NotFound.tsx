import { styled } from '../styles/stitches.config'

const NotFoundStyled = styled('main', {
  minHeight: '100dvh',

  display: 'grid',
  placeContent: 'center',

  textAlign: 'center',

  padding: '2rem',

  p: {
    color: 'FireBrick',
    fontSize: '$xl',
    fontWeight: '$medium',
    lineHeight: '$base',
  },
})

export function NotFound() {
  return (
    <NotFoundStyled>
      <p>The page your are trying to access does not exist.</p>
    </NotFoundStyled>
  )
}
