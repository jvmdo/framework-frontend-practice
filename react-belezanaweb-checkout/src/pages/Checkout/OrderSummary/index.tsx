import { createPortal } from 'react-dom'
import { useCheckoutContext } from '..'
import { BrandButton } from '../../../components/BrandButton'
import { ContentContainer } from '../../../styles/components/ContentContainer'
import { S_OrderItem, S_OrderSummary } from './styles'
import { Formatter } from '../../../utils/formatter'

export function OrderSummary() {
  const { cartItems, btnSpace } = useCheckoutContext()

  return (
    <S_OrderSummary>
      <ContentContainer>
        <ul>
          {cartItems.map(({ id, imageUrl, name, price, maxPrice }) => {
            return (
              <S_OrderItem key={id}>
                <div className="img-box">
                  <img src={imageUrl} alt={name} />
                </div>
                <p>{name}</p>
                <div className="prices">
                  {maxPrice !== price && <s>{Formatter.currency(maxPrice)}</s>}
                  <strong>{Formatter.currency(price)}</strong>
                </div>
              </S_OrderItem>
            )
          })}
        </ul>
        {createPortal(
          <BrandButton to="../pagamento">Seguir para o pagamento</BrandButton>,
          btnSpace,
        )}
      </ContentContainer>
    </S_OrderSummary>
  )
}
