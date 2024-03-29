import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ContentContainer } from '../../styles/components/ContentContainer'

export const CheckoutLayout = styled.div({
  display: 'grid',
  gridAutoRows: 'auto 1fr auto',
  gap: '1.5rem',
  minHeight: '100dvh',

  '& > main': {
    display: 'grid',
  },
})

export const S_NavLink = styled(NavLink)(({ theme }) => ({
  color: theme.colors.step,
  lineHeight: theme.font.lineHeight.stepper,
  fontSize: theme.font.size.sm,

  display: 'inline-block',
  position: 'relative',
  paddingBlock: 'clamp(0.5rem, 0.196rem + 1.3vmin, 1rem)',
  paddingInline: 'clamp(0.75rem, -1.073rem + 7.78vmin, 3.75rem)',

  '&.active': {
    color: theme.colors.black,
  },

  '&::after': {
    content: '""',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  '&.active::after': {
    backgroundColor: theme.colors.black,
    height: '4px',
  },

  '&:not(.active)::after': {
    backgroundColor: theme.colors.step,
    height: '1px',
  },
}))

export const Stepper = styled.ul(({ theme }) => ({
  backgroundColor: theme.colors.white,
  boxShadow: theme.shadows.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const PriceSummary = styled.ul(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '& > li': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: theme.font.size.sm,
    lineHeight: theme.font.lineHeight.amount,
  },

  '& .discount + span': {
    color: theme.colors.primary,
    fontFamily: theme.font.family.secondary,
    fontWeight: theme.font.weight.bold,
  },

  '& > li:last-of-type': {
    fontFamily: theme.font.family.secondary,
    fontSize: theme.font.size.base,
    fontWeight: theme.font.weight.bold,
    lineHeight: theme.font.lineHeight.total,
  },
}))

export const ButtonSpace = styled.div(({ theme }) => ({
  display: 'grid',
  lineHeight: theme.font.lineHeight.button,
}))

export const LayoutFooter = styled.footer(({ theme }) => ({
  backgroundColor: theme.colors.white,

  [`& > ${ContentContainer}`]: {
    display: 'grid',
    gridAutoRows: 'min-content 3rem',
    gap: '1.5rem',
    paddingBlock: '1.75rem',
  },
}))
