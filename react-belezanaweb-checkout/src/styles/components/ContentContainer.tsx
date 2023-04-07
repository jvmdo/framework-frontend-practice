import styled from 'styled-components'
import { defaultTheme } from '../themes/default'

const { breakpoints } = defaultTheme

export const ContentContainer = styled.div`
  /* 10px to 20px, from 320px to 375px */
  --fluid-padding: clamp(0.625rem, -3.011rem + 18.18vw, 1.25rem);

  /* 24px to 48px, from 375px to 992px  */
  @media (min-width: ${breakpoints.xs}) {
    --fluid-padding: clamp(1.25rem, 0.49rem + 3.24vw, 2.5rem);
  }

  --base-width: 54rem;
  max-width: calc(var(--base-width) + 2 * var(--fluid-padding));
  margin-inline: auto;
  padding-inline: var(--fluid-padding);
`
