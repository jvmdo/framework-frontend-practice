import { createPortal } from 'react-dom'
import { useCheckoutContext } from '..'
import { BrandButton } from '../../../components/BrandButton'
import { ContentContainer } from '../../../styles/components/ContentContainer'

export function OrderSummary() {
  const { cartItems, btnSpace } = useCheckoutContext()

  if (cartItems.length === 0) {
    return <h1>Cart Summary Page</h1>
  }

  return (
    <ContentContainer>
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
      {createPortal(
        <BrandButton to="../pagamento">Seguir para o pagamento</BrandButton>,
        btnSpace,
      )}
    </ContentContainer>
  )
}
