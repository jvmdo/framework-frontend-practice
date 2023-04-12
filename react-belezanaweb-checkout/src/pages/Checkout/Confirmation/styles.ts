import styled from 'styled-components'
import { ContentContainer } from '../../../styles/components/ContentContainer'

export const S_Confirmation = styled.section(({ theme }) => ({
  display: 'grid',
  gridAutoRows: 'auto 1fr',
  gap: '1.25rem',

  [`${ContentContainer}:first-of-type`]: {
    color: theme.colors.label,
    fontSize: theme.font.size.base,
    lineHeight: theme.font.lineHeight.card,
    padding: '1rem 1.25rem 1.5rem',

    '& > h1': {
      color: theme.colors.black,
      fontSize: theme.font.size.xlg,
      fontWeight: theme.font.weight.regular,
      lineHeight: theme.font.lineHeight.heading2,
    },

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },

  [`${ContentContainer}:last-of-type`]: {
    padding: '1.5rem 0.625rem 2rem',

    '& > h2': {
      color: theme.colors.black,
      fontSize: theme.font.size.lg,
      fontWeight: theme.font.weight.regular,
      lineHeight: theme.font.lineHeight.heading,
      marginBottom: '1.8125rem',
    },

    '& > ul': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.8125rem',

      '& > li': {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        alignItems: 'center',
        gap: '1rem',

        '& img': {
          '--width': 'clamp(2.5rem, -4.773rem + 36.36vw, 3.75rem)',
          '@media (min-width: 23.4375em)': {
            '--width': 'clamp(3.75rem, 2.231rem + 6.48vw, 6.25rem)',
          },
          width: 'var(--width)',
        },
      },
    },
  },
}))
