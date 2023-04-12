import styled from 'styled-components'
import { ContentContainer } from '../../../styles/components/ContentContainer'

export const S_OrderSummary = styled.section({
  display: 'grid',

  [`${ContentContainer}`]: {
    padding: '1.5rem 0.625rem 2.5rem',

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

  '& :where(s, strong)': {
    fontSize: theme.font.size.sm,
  },

  '& p': {
    fontSize: theme.font.size.xs,
  },

  '& .prices': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.25rem',
    lineHeight: theme.font.lineHeight.amount,
  },

  '& > img': {
    '--width': 'clamp(2.5rem, -4.773rem + 36.36vw, 3.75rem)',
    '@media (min-width: 23.4375em)': {
      '--width': 'clamp(3.75rem, 2.231rem + 6.48vw, 6.25rem)',
    },
    width: 'var(--width)',
  },

  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  gap: '0.875rem',
}))
