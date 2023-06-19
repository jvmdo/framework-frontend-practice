import { RaffleSelector } from '../RaffleSelector'
import { PageTemplateContainer } from './styles'

interface PageTemplateProps {
  raffle?: string
  winningNumbers?: number[]
  raffleNumber?: number
  date?: string
}

export function PageTemplate({
  raffle = 'Mega-Sena',
  winningNumbers = '1 2 3 10 11 12',
  raffleNumber = '4020',
  date = new Date().toUTCString(),
}: PageTemplateProps) {
  return (
    <PageTemplateContainer>
      <RaffleSelector />
    </PageTemplateContainer>
  )
}
