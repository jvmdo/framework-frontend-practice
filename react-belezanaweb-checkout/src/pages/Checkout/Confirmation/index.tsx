import { useEffect } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'

export function Confirmation() {
  const navigate = useNavigate()
  const data = useActionData()

  console.log('Confirmation', data)

  useEffect(() => {
    window.addEventListener('popstate', () => navigate('/'))
  }, [navigate])

  return (
    <>
      <h1>Compra realizada com sucesso!</h1>
      <button onClick={() => navigate('/')}>Retornar ao início</button>
    </>
  )
}

interface ConfirmationActionParams {
  request: Request
}

export async function confirmationAction({
  request,
}: ConfirmationActionParams) {
  const data = Object.fromEntries(await request.formData())
  try {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
  } catch {
    throw new Error('Could not POST data to server. Try again.')
  }
}
