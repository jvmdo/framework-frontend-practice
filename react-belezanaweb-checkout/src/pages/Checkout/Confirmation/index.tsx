import { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ContentContainer } from '../../../styles/components/ContentContainer'
import { S_Confirmation } from './styles'
import { useCheckoutContext } from '..'
import { createPortal } from 'react-dom'
import { BrandButton } from '../../../components/BrandButton'
import { useTheme } from 'styled-components'

export function Confirmation() {
  const navigate = useNavigate()
  const location = useLocation()
  const { cartItems, btnSpace } = useCheckoutContext()
  const theme = useTheme()

  const navigateToRoot = useCallback(() => navigate('/'), [navigate])

  useEffect(() => {
    window.addEventListener('popstate', navigateToRoot)
    return () => window.removeEventListener('popstate', navigateToRoot)
  }, [navigateToRoot])

  return (
    <S_Confirmation>
      <ContentContainer>
        <h1>Compra efetuada com sucesso</h1>
        <span>{location.state.card}</span>
        <span>{location.state.name}</span>
        <span>{location.state.date}</span>
      </ContentContainer>
      <ContentContainer>
        <h2>Produtos</h2>
        <ul>
          {cartItems.map(({ id, imageUrl, name }) => (
            <li key={id}>
              <img src={imageUrl} alt={name} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </ContentContainer>
      {createPortal(
        <BrandButton
          as="button"
          onClick={navigateToRoot}
          color={theme.colors.black}
        >
          Voltar ao início do protótipo
        </BrandButton>,
        btnSpace,
      )}
    </S_Confirmation>
  )
}
