import { useForm } from 'react-hook-form'
import {
  Navigate,
  useActionData,
  useNavigation,
  useSubmit,
} from 'react-router-dom'

export function Payment() {
  const { register, handleSubmit, reset } = useForm()
  const submit = useSubmit()
  const { state } = useNavigation()
  const actionData = useActionData()

  function onSuccessSubmit(data: any) {
    submit(data, { method: 'post' })
    reset()
  }

  if (state === 'idle' && actionData) {
    return <Navigate to="/checkout/confirmacao" state={actionData} />
  }

  return (
    <form onSubmit={handleSubmit(onSuccessSubmit)}>
      <input type="text" placeholder="Nome" {...register('name')} />
      <input type="text" placeholder="Número do cartão" {...register('card')} />
      <button disabled={state === 'submitting' || state === 'loading'}>
        Enviar
      </button>
    </form>
  )
}

export async function paymentAction({ request }: { request: Request }) {
  const data = Object.fromEntries(await request.formData())
  try {
    // Simulate post to the payment service backend
    // TODO: create a service that fakes the POST and data handling
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    // return data
  } catch {
    throw new Error('Could not POST data to server. Try again.')
  }
}
