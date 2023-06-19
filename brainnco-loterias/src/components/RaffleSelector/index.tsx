import * as Select from '@radix-ui/react-select'
import { useState } from 'react'
import {
  SelectContent,
  SelectIcon,
  SelectTrigger,
  SelectViewport,
  SelectItem,
  SelectItemIndicator,
} from './styles'
import { CaretDown, CaretLeft } from '@phosphor-icons/react'

const raffles = [
  'mega-sena',
  'quina',
  'lotofacil',
  'lotomania',
  'timemania',
  'dia de sorte',
]

export function RaffleSelector() {
  const [value, setValue] = useState<string>(raffles[0])

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <SelectTrigger>
        <Select.Value aria-label={value}>{value}</Select.Value>
        <SelectIcon>
          <CaretDown size={16} weight="fill" />
        </SelectIcon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent position="popper" sideOffset={2} align="center">
          <SelectViewport>
            {raffles.map((raffle) => (
              <SelectItem key={raffle} value={raffle}>
                <Select.ItemText>{raffle}</Select.ItemText>
                <SelectItemIndicator>
                  <CaretLeft size={16} weight="fill" />
                </SelectItemIndicator>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}
