import { createBrowserRouter, redirect } from 'react-router-dom'
import { Home } from './pages/Home'
import { MegaSenaPage } from './pages/MegaSenaPage'
import { PageTemplateProps } from './components/PageTemplate'
import { QuinaPage } from './pages/QuinaPage'
import { Raffle } from './constants/raffles'
import { LotofacilPage } from './pages/LotofacilPage'
import { LotomaniaPage } from './pages/LotomaniaPage'
import { TimemaniaPage } from './pages/TimemaniaPage'
import { DiaDeSortePage } from './pages/DiaDeSortePage'

const elements = {
  [Raffle.MegaSena]: <MegaSenaPage />,
  [Raffle.Quina]: <QuinaPage />,
  [Raffle.Lotofacil]: <LotofacilPage />,
  [Raffle.Lotomania]: <LotomaniaPage />,
  [Raffle.Timemania]: <TimemaniaPage />,
  [Raffle.DiaDeSorte]: <DiaDeSortePage />,
}

const raffleRoutes = Object.values(Raffle).map((raffle) => ({
  path: raffle,
  // component is the way to prevent page duplication
  // Or only one page with multiple loaders
  element: elements[raffle],
  loader: async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.max(Math.random() * 600, 300)),
    )
    const data: PageTemplateProps = {
      raffle,
      winningNumbers: Array.from(
        { length: 6 },
        () => Math.round(Math.random() * 59) + 1,
      ),
      raffleNumber: Math.round(Math.random() * 9998) + 1,
      date: new Date().toUTCString(),
    }
    return data
  },
}))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => redirect(`/${Raffle.MegaSena}`),
  },
  ...raffleRoutes,
])
