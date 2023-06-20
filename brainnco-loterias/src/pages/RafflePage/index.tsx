import { useNavigation } from 'react-router-dom'
import { Raffle } from '../../constants/raffles'
import { RaffleSelector } from '../../components/RaffleSelector'
import { Ball, Footer, Header, Main, PageTemplateContainer } from './styles'

export interface RafflePageProps {
  raffle: Raffle
  winningNumbers: number[]
  raffleNumber: number
  date: string
}

export function RafflePage({
  raffle,
  winningNumbers,
  raffleNumber,
  date,
}: RafflePageProps) {
  const navigation = useNavigation()

  const isLoading = navigation.state !== 'idle'

  return (
    <PageTemplateContainer withSpinner={isLoading}>
      <Header raffle={raffle}>
        <RaffleSelector />
        <div className="lgroup">
          <img src="/logo.svg" alt="" />
          <h1>{raffle}</h1>
        </div>
        <div className="fgroup">
          <p>Concurso</p>
          <strong>
            {raffleNumber} - {new Date(date).toLocaleDateString('pt-BR')}
          </strong>
        </div>
      </Header>
      <Main>
        <ol>
          {winningNumbers.map((number) => (
            <li key={number}>
              <Ball>{number}</Ball>
            </li>
          ))}
        </ol>
      </Main>
      <Footer>
        <p>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </Footer>
    </PageTemplateContainer>
  )
}
