import { useFormContext } from 'react-hook-form'
import {
  Navigate,
  useActionData,
  useNavigation,
  useSubmit,
} from 'react-router-dom'
import { InputField } from '../../../components/InputField'
import { payment, PaymentFormValues } from '../../../services/payment'
import { z } from 'zod'
import validator from 'validator'

export const FormDataSchema = z.object({
  name: z.string().regex(/^[a-zA-Z]+(?:['., -][a-zA-Z]+)*$/, {
    message: 'Insira um nome válido',
  }),
  card: z.string().refine((value) => validator.isCreditCard(value), {
    message: 'Insira um número de cartão válido',
  }),
  date: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, {
    message: 'Insira uma data válida',
  }),
  cvv: z.string().length(3, { message: 'Insira um CVV válido' }),
})

export type FormDataType = z.infer<typeof FormDataSchema>

export function Payment() {
  const { handleSubmit, control, reset } = useFormContext<FormDataType>()
  const submit = useSubmit()
  const { state } = useNavigation()
  const actionData = useActionData()

  function onSuccessSubmit(data: any) {
    submit(data, { method: 'post' })
  }

  if (state === 'idle' && actionData) {
    reset()
    return <Navigate to="/checkout/confirmacao" state={actionData} />
  }

  return (
    <form id="payment" onSubmit={handleSubmit(onSuccessSubmit)}>
      <InputField
        control={control}
        options={{ creditCard: true }}
        name="card"
        placeholder="0000 0000 0000 0000"
        label="Número"
      />
      <InputField
        control={control}
        options={{ delimiter: '' }}
        name="name"
        placeholder="Nome impresso no cartão"
        label="Nome do titular do cartão"
      />
      <InputField
        control={control}
        options={{ date: true, datePattern: ['m', 'y'] }}
        name="date"
        placeholder="MM/AA"
        label="Data de validade"
      />
      <InputField
        control={control}
        options={{ blocks: [3], numericOnly: true }}
        name="cvv"
        placeholder="000"
        label="Código CVV"
      />
      <button disabled={state === 'submitting' || state === 'loading'}>
        Enviar
      </button>
    </form>
  )
}

export async function paymentAction({ request }: { request: Request }) {
  const data = Object.fromEntries(await request.formData()) as PaymentFormValues
  try {
    // Simulate post to the payment service backend
    return payment(data)
  } catch {
    throw new Error('Could not POST data to server. Try again.')
  }
}
