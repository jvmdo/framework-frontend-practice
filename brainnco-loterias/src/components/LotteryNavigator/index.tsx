import {
  NavigationList,
  NavigationMenuContent,
  NavigationMenuDropDown,
  NavigationMenuLink,
  NavigationMenuRoot,
  NavigationMenuSelect,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ViewportPosition,
} from './styles'
import { LotteryName } from '../../constants/lottery-names'
import { NavLink } from 'react-router-dom'
import { CaretDown, CaretLeft } from '@phosphor-icons/react'

export function LotteryNavigator() {
  const currentLocation = window.location.pathname
    .replace('/', '')
    .replace(/-/g, ' ')

  return (
    <NavigationMenuRoot delayDuration={9999} skipDelayDuration={-1}>
      <NavigationMenuSelect>
        <NavigationMenuDropDown>
          <NavigationMenuTrigger>
            {currentLocation}
            <CaretDown aria-hidden weight="fill" size={16} />
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <NavigationList>
              {Object.values(LotteryName).map((lottery) => (
                <li key={lottery}>
                  <NavigationMenuLink asChild>
                    <NavLink to={`/${lottery}`}>
                      {lottery.replace(/-/g, ' ')}
                      <CaretLeft weight="fill" size={16} />
                    </NavLink>
                  </NavigationMenuLink>
                </li>
              ))}
            </NavigationList>
          </NavigationMenuContent>
        </NavigationMenuDropDown>
      </NavigationMenuSelect>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenuRoot>
  )
}
