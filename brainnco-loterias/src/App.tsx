import { RouterProvider } from 'react-router-dom'
import { globalStyles } from './styles/globals'
import { router } from './Router'
import { Spinner } from './components/Spinner'

globalStyles()

export function App() {
  return <RouterProvider router={router} fallbackElement={<Spinner />} />
}
