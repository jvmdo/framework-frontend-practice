import { createPortal } from 'react-dom'
import { useCheckoutContext } from '..'
import { BrandButton } from '../../../components/BrandButton'
import { ContentContainer } from '../../../styles/components/ContentContainer'
import { S_OrderItem, S_OrderSummary } from './styles'
import { Formatter } from '../../../utils/formatter'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'

export function OrderSummary() {
  const { cartItems, btnSpace } = useCheckoutContext()
  const { reset } = useFormContext()

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <S_OrderSummary>
      <ContentContainer>
        <ul>
          {cartItems.map(({ id, imageUrl, name, price, maxPrice }) => {
            return (
              <S_OrderItem key={id}>
                <img src={imageUrl} alt={name} />
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
