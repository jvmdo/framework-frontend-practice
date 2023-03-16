import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom'

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

  return (
    <>
      <h1>Checkout Steps</h1>
      <Outlet context={cartItems} />
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
