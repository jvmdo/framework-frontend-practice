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
import { useLocation, useNavigate } from 'react-router-dom'
import { LotteryName } from '../../constants/lottery-names'

/* 
  ! Do not use this component
  * Use the new LotteryNavigator instead
*/

export function LotterySelector() {
  const location = useLocation()
  const currentRaffle = location.pathname.replace('/', '')

  const [raffle, setRaffle] = useState(currentRaffle)
  const navigate = useNavigate()

  function handleSelectNavigation(raffle: string) {
    navigate(`/${raffle}`)
    setRaffle(raffle)
  }

  return (
    <Select.Root value={raffle} onValueChange={handleSelectNavigation}>
      <SelectTrigger>
        <Select.Value aria-label={raffle}>{raffle}</Select.Value>
        <SelectIcon>
          <CaretDown size={16} weight="fill" />
        </SelectIcon>
      </SelectTrigger>
      <Select.Portal>
        <SelectContent position="popper" sideOffset={2} align="center">
          <SelectViewport>
            {Object.values(LotteryName).map((raffle) => (
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
