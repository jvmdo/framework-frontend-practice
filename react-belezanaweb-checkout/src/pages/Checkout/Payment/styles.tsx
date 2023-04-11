import styled from 'styled-components'
import { ContentContainer } from '../../../styles/components/ContentContainer'

export const S_Payment = styled.section(({ theme }) => ({
  display: 'grid',

  [`${ContentContainer}`]: {
    display: 'grid',
    gridAutoRows: 'auto 1fr',
    gap: '1rem',

    '& > h1': {
      fontSize: theme.font.size.lg,
      fontWeight: theme.font.weight.regular,
      lineHeight: theme.font.lineHeight.heading,
    },

    '& > form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',

      '& .input-col': {
        display: 'grid',
        gridAutoFlow: 'column',
        gap: '0.875rem',
      },
    },
  },
}))
