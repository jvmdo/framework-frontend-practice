import styled from 'styled-components'
import { ContentContainer } from '../../../styles/components/ContentContainer'

export const S_OrderSummary = styled.section({
  display: 'grid',

  [`${ContentContainer}`]: {
    '& > ul': {
      display: 'grid',
      gap: '2.5rem',
    },
  },
})

export const S_OrderItem = styled.li(({ theme }) => ({
  '& s': {
    color: theme.colors.strike,
  },

  '& strong': {
    fontSize: theme.font.size.sm,
  },

  '& .prices': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.25rem',
    lineHeight: theme.font.lineHeight.amount,
  },

  '& .img-box': {
    minWidth: '3.75rem',
  },

  display: 'flex',
  alignItems: 'center',
  gap: '0.875rem',
}))
