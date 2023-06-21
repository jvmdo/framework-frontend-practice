import { createBrowserRouter, redirect } from 'react-router-dom'
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import { Lottery } from './pages/Lottery'
import { LotteryName } from './constants/lottery-names'
import { lotteryLoader } from './services/loaders'
import { NotFound } from './pages/NotFound'

const lotteryRoutes = Object.values(LotteryName).map((lottery) => ({
  path: lottery,
  element: <Lottery />,
  errorElement: <Error />,
  loader: () => lotteryLoader(lottery),
}))

export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Home />,
    loader: () => redirect(`/${LotteryName.MegaSena}`),
  },
  ...lotteryRoutes,
])
