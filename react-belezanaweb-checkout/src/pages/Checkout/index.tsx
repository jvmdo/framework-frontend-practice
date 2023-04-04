import { FormProvider, useForm } from 'react-hook-form'
import {
  NavLink,
  Outlet,
  useLoaderData,
  useMatch,
  useNavigate,
  useOutletContext,
} from 'react-router-dom'
import { FormDataSchema, FormDataType } from './Payment'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'

export interface CartItem {
  id: number
  quantity: number
  imageUrl: string
  name: string
  price: number
}

export function useCartItems() {
  return useOutletContext<CartItem[]>()
}

export function Checkout() {
  const cartItems = useLoaderData() as CartItem[]
  const isConfirmationRoute = useMatch('checkout/confirmacao')
  const formMethods = useForm<FormDataType>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: { card: '', name: '', date: '', cvv: '' },
  })

  const confirmationBtnRef = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()
  const isBagRoute = useMatch('checkout/sacola')

  const {
    formState: { isValid },
  } = formMethods

  return (
    <>
      <h1>Checkout Steps</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="./sacola"
              style={({ isActive }) => ({
                color: isActive ? 'rebeccapurple' : '',
              })}
            >
              Sacola
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./pagamento"
              style={({ isActive }) => ({
                color: isActive ? 'rebeccapurple' : '',
              })}
            >
              Pagamento
            </NavLink>
          </li>
          <li>
            <button
              ref={confirmationBtnRef}
              form="payment"
              type="submit"
              onClick={() => {
                if (!isBagRoute || !isValid) {
                  console.count('Not yet!')
                  return
                }
                navigate('./pagamento')
                confirmationBtnRef.current?.click()
              }}
              style={{
                color: isConfirmationRoute
                  ? 'rebeccapurple'
                  : isValid
                  ? '#646cff'
                  : '#2f2f2f',
              }}
            >
              Confirmação
            </button>
          </li>
        </ul>
      </nav>
      <FormProvider {...formMethods}>
        <Outlet context={cartItems} />
      </FormProvider>
    </>
  )
}

export async function checkoutLoader() {
  try {
    const response = await fetch(
      'https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd',
    )
    const data = await response.json()
    const cartItems: CartItem[] = data.items.map((item: any) => ({
      id: item.product.sku,
      quantity: item.quantity,
      imageUrl: item.product.imageObjects[0].small,
      name: item.product.name,
      price: item.product.priceSpecification.maxPrice,
    }))
    return cartItems
  } catch {
    throw new Error('Failed to fetch data')
  }
}
