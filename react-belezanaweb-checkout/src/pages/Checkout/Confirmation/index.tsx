import { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function Confirmation() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToRoot = useCallback(() => navigate('/'), [navigate])

  useEffect(() => {
    window.addEventListener('popstate', navigateToRoot)
    return () => window.removeEventListener('popstate', navigateToRoot)
  }, [navigateToRoot])

  return (
    <>
      <h1>Compra realizada com sucesso!</h1>
      <p>Cartão: {location.state.card}</p>
      <p>Nome: {location.state.name}</p>
      <p>Date: {location.state.date}</p>
      <p>CVV: {location.state.cvv}</p>
      <button onClick={navigateToRoot}>Retornar ao início</button>
    </>
  )
}
