import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function Confirmation() {
  const navigate = useNavigate()
  const location = useLocation()

  console.log('HERE')

  useEffect(() => {
    window.addEventListener('popstate', () => navigate('/'))
  }, [navigate])

  return (
    <>
      <h1>Compra realizada com sucesso!</h1>
      <p>Nome: {location.state.name}</p>
      <p>Cartão: {location.state.card}</p>
      <button onClick={() => navigate('/')}>Retornar ao início</button>
    </>
  )
}
