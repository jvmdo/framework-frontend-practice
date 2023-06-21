import { useLoaderData, useNavigation } from 'react-router-dom'
import { RaffleSelector } from '../../components/RaffleSelector'
import { Ball, Footer, Header, Main, LotteryContainer } from './styles'
import { LotteryData } from '../../types'

export function Lottery() {
  const data = useLoaderData() as LotteryData
  const navigation = useNavigation()

  const isLoading = navigation.state !== 'idle'
  const { lottery, draw, date, numbers } = data

  return (
    <LotteryContainer withSpinner={isLoading}>
      <Header color={lottery}>
        <RaffleSelector />
        <div className="lottery--name">
          <img src="/logo.svg" alt="" />
          <h1>{lottery}</h1>
        </div>
        <div className="lottery--info">
          <p>Concurso</p>
          <strong>
            {draw} - {date}
          </strong>
        </div>
      </Header>
      <Main>
        <ol>
          {numbers.map((number) => (
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
    </LotteryContainer>
  )
}
