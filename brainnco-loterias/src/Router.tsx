import { createBrowserRouter, redirect, useLoaderData } from 'react-router-dom'
import { Home } from './pages/Home'
import { RafflePage, RafflePageProps } from './pages/RafflePage'
import { Raffle } from './constants/raffles'

const raffleRoutes = Object.values(Raffle).map((raffle) => ({
  path: raffle,
  Component: () => {
    const data = useLoaderData() as RafflePageProps
    return <RafflePage {...data} />
  },
  loader: async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.max(Math.random() * 600, 300)),
    )
    const data: RafflePageProps = {
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
