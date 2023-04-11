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
import { ContentContainer } from '../../../styles/components/ContentContainer'
import { S_Payment } from './styles'
import { createPortal } from 'react-dom'
import { useCheckoutContext } from '..'
import { BrandButton } from '../../../components/BrandButton'

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
  const { btnSpace } = useCheckoutContext()

  function onSuccessSubmit(data: FormDataType) {
    console.log(data)
    submit(data, { method: 'post' })
  }

  if (state === 'idle' && actionData) {
    // resetting here in rasing a warning
    // Cannot update a component (`Controller`) while rendering a different component (`Payment`)
    reset()
    return <Navigate to="/checkout/confirmacao" state={actionData} />
  }

  return (
    <S_Payment>
      <ContentContainer>
        <h1>Cartão de crédito</h1>
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
          <div className="input-col">
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
          </div>
          {createPortal(
            <BrandButton
              as="button"
              type="submit"
              form="payment"
              disabled={state === 'submitting' || state === 'loading'}
            >
              Finalizar pedido
            </BrandButton>,
            btnSpace,
          )}
        </form>
      </ContentContainer>
    </S_Payment>
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
