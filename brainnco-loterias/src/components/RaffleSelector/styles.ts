import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles/stitches.config'

export const SelectTrigger = styled(Select.SelectTrigger, {
  all: 'unset',
  cursor: 'pointer',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  backgroundColor: '$white',
  borderRadius: '1rem',
  boxShadow: `$select`,

  color: '$gray500',
  fontSize: '$sm',
  fontWeight: '$medium',
  textTransform: 'uppercase',

  padding: '1rem 1.588rem 1.065rem 2.065rem',
  width: '10.912rem',
})

export const SelectIcon = styled(Select.SelectIcon, {
  display: 'inline-flex',
  alignItems: 'center',

  color: '$gray300',

  '[data-state="open"] > &': {
    display: 'none',
  },
})

export const SelectContent = styled(Select.Content, {
  backgroundColor: '$white',
  borderRadius: '0 0 0.5rem 0.5rem',
  boxShadow: '$select',

  textTransform: 'uppercase',

  width: 'calc(var(--radix-select-trigger-width) - 2rem)',
  maxHeight: 'var(--radix-select-content-available-height)',
})

export const SelectViewport = styled(Select.Viewport, {
  padding: '1rem',
})

export const SelectItem = styled(Select.Item, {
  display: 'flex',
  alignItems: 'center',

  borderRadius: '0.25rem',

  fontSize: '$sm',

  height: '1.5rem',
  padding: '1rem 0.75rem',

  position: 'relative',
  userSelect: 'none',

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$gray100',
  },
})

export const SelectItemIndicator = styled(Select.ItemIndicator, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$gray300',

  position: 'absolute',
  insetInlineEnd: '0.25rem',
})
