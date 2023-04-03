import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function Confirmation() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.addEventListener('popstate', () => navigate('/'))
  }, [navigate])

  return (
    <>
      <h1>Compra realizada com sucesso!</h1>
      <p>Cartão: {location.state.card}</p>
      <p>Nome: {location.state.name}</p>
      <p>Date: {location.state.date}</p>
      <p>CVV: {location.state.cvv}</p>
      <button onClick={() => navigate('/')}>Retornar ao início</button>
    </>
  )
}
