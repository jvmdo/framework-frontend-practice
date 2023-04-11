import { FormProvider, useForm } from 'react-hook-form'
import {
  Outlet,
  useLoaderData,
  useMatch,
  useNavigate,
  useOutletContext,
} from 'react-router-dom'
import { FormDataSchema, FormDataType } from './Payment'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckoutLayout,
  LayoutFooter,
  PriceSummary,
  S_NavLink,
  Stepper,
} from './styles'
import { Formatter } from '../../utils/formatter'
import { ContentContainer } from '../../styles/components/ContentContainer'
import { useEffect, useRef, useState } from 'react'

type CheckoutSummary = {
  itemsQuantity: number
  subTotal: number
  shipping: number
  discount: number
  total: number
}

export type CartItem = {
  id: number
  name: string
  imageUrl: string
  price: number
  maxPrice: number
  quantity: number
}

type LoaderData = {
  cartItems: CartItem[]
  checkoutData: CheckoutSummary
}

type CheckoutContext = {
  cartItems: CartItem[]
  btnSpace: HTMLDivElement
}

export function useCheckoutContext() {
  return useOutletContext<CheckoutContext>()
}

export function Checkout() {
  const { cartItems, checkoutData } = useLoaderData() as LoaderData
  const formMethods = useForm<FormDataType>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: { card: '', name: '', date: '', cvv: '' },
  })
  const navigate = useNavigate()
  const isConfirmationRoute = useMatch('checkout/confirmacao')
  const [didMount, setDidMount] = useState(false)
  const btnSpaceRef = useRef<HTMLDivElement>(null)

  const {
    formState: { isValid },
  } = formMethods

  function handleConfirmationClick() {
    if (isConfirmationRoute) return
    if (!isValid) alert('Preencha os dados de pagamento corretamente.')
    navigate('./pagamento')
  }

  useEffect(() => {
    setDidMount(true)
  }, [])

  return (
    <CheckoutLayout>
      <header>
        <nav>
          <Stepper>
            <li>
              <S_NavLink to="./sacola">Sacola</S_NavLink>
            </li>
            <li>
              <S_NavLink to="./pagamento">Pagamento</S_NavLink>
            </li>
            <li>
              <S_NavLink
                as="button"
                type="submit"
                form="payment"
                onClick={handleConfirmationClick}
                className={isConfirmationRoute ? 'active' : ''}
              >
                Confirmação
              </S_NavLink>
            </li>
          </Stepper>
        </nav>
      </header>

      <main>
        <FormProvider {...formMethods}>
          {didMount && (
            <Outlet context={{ cartItems, btnSpace: btnSpaceRef.current }} />
          )}
        </FormProvider>
      </main>

      <LayoutFooter>
        <ContentContainer>
          <PriceSummary>
            <li>
              <span>Produtos: ({checkoutData.itemsQuantity} itens)</span>
              <span>{Formatter.currency(checkoutData.subTotal)}</span>
            </li>
            <li>
              <span>Frete:</span>
              <span>{Formatter.currency(checkoutData.shipping)}</span>
            </li>
            <li>
              <span className="discount">Desconto:</span>
              <span>{Formatter.currency(checkoutData.discount)}</span>
            </li>
            <li>
              <span>Subtotal:</span>
              <span>{Formatter.currency(checkoutData.total)}</span>
            </li>
          </PriceSummary>
          {/* TODO: own component with styles */}
          <div ref={btnSpaceRef} style={{ display: 'grid' }}></div>
        </ContentContainer>
      </LayoutFooter>
    </CheckoutLayout>
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
      name: item.product.name,
      imageUrl: item.product.imageObjects[0].small,
      price: item.product.priceSpecification.price,
      maxPrice: item.product.priceSpecification.maxPrice,
      quantity: item.quantity,
    }))

    const checkoutData: CheckoutSummary = {
      itemsQuantity: cartItems.reduce((acc, { quantity }) => acc + quantity, 0),
      subTotal: data.subTotal,
      shipping: data.shippingTotal,
      discount: data.discount,
      total: data.total,
    }

    return { cartItems, checkoutData }
  } catch {
    throw new Error('Failed to fetch data')
  }
}
