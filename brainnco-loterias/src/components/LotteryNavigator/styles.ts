import { styled } from '../../styles/stitches.config'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: 'relative',
  zIndex: 1,
})

export const ViewportPosition = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: 'absolute',
  overflow: 'hidden',

  marginBlockStart: 2,

  height: 'var(--radix-navigation-menu-viewport-height)',
  width: 'var(--radix-navigation-menu-viewport-width)',
})

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$white',
  border: 'none',
  borderRadius: '1rem',
  boxShadow: `$select`,

  color: '$gray500',
  fontSize: '$sm',
  fontWeight: '$medium',
  textTransform: 'uppercase',

  padding: '1rem 1.588rem 1.065rem 2.065rem',
  width: '14.5625rem',

  cursor: 'pointer',

  '&:focus-visible': {
    outline: '2px solid $gray500',
  },

  '&[data-state=open] > svg': {
    display: 'none',
  },
})

export const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  insetBlockStart: 0,

  backgroundColor: '$white',
  borderRadius: '0 0 0.5rem 0.5rem',
  boxShadow: '$select',

  padding: '1rem',
  width: 'calc(12.5625rem)',
})

export const NavigationList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
})

export const NavigationMenuLink = styled(NavigationMenu.Link, {
  display: 'flex',
  alignItems: 'center',

  borderRadius: '0.25rem',

  color: '$gray500',
  fontSize: '$sm',
  textTransform: 'uppercase',

  padding: '0.5rem 1rem',

  cursor: 'pointer',
  outline: 'none',
  textDecoration: 'none',

  position: 'relative',

  '& > svg': { display: 'none' },

  '&.active > svg': {
    display: 'inline-block',
    color: '$gray300',

    position: 'absolute',
    insetInlineEnd: '0.25rem',
  },

  '&:is(:hover, :focus-visible)': {
    backgroundColor: '$gray100',
  },
})

// Just for renaming purposes
export const NavigationMenuSelect = styled(NavigationMenu.List, {})
export const NavigationMenuDropDown = styled(NavigationMenu.Item, {})
