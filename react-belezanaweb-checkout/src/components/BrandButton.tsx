import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BrandButton = styled(Link)(({ theme, color }) => ({
  backgroundColor: color ?? theme.colors.primary,
  borderRadius: theme.radii.r,
  color: theme.colors.white,
  fontSize: theme.font.size.md,
  fontWeight: theme.font.weight.bold,
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '1rem 2rem 0.875rem',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
}))
