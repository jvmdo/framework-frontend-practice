import { useRouteError } from 'react-router-dom'
import { styled } from '../styles/stitches.config'

const ErrorStyled = styled('main', {
  minHeight: '100dvh',

  display: 'grid',
  placeContent: 'center',
  gap: '2rem',

  textAlign: 'center',

  padding: '2rem',

  p: {
    color: 'FireBrick',
    fontSize: '$xl',
    fontWeight: '$medium',
    lineHeight: '$base',
  },

  span: {
    color: 'Brown',
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})

export function Error() {
  const error = useRouteError()

  console.error(error)

  return (
    <ErrorStyled>
      <p>Unexpected Application Error!</p>
      <span>See console to details</span>
    </ErrorStyled>
  )
}
