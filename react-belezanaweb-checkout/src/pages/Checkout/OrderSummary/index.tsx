import { Link } from 'react-router-dom'
import { useCartItems } from '..'

export function OrderSummary() {
  const cartItems = useCartItems()

  if (cartItems.length === 0) {
    return <h1>Cart Summary Page</h1>
  }

  return (
    <main>
      <section>
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt="" />
                <p>{item.name}</p>
                <strong>R$ {item.price}</strong>
              </li>
            )
          })}
        </ul>
      </section>
      <Link to="../pagamento">Ir para pagamento</Link>
    </main>
  )
}
