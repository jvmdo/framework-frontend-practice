import { createBrowserRouter, redirect } from 'react-router-dom'
import { Checkout, checkoutLoader } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderSummary } from './pages/Checkout/OrderSummary'
import { Payment } from './pages/Checkout/Payment'
import { Confirmation, confirmationAction } from './pages/Checkout/Confirmation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => redirect('checkout/sacola'),
  },
  {
    path: 'checkout',
    element: <Checkout />,
    loader: checkoutLoader,
    children: [
      {
        path: 'sacola',
        element: <OrderSummary />,
      },
      {
        path: 'pagamento',
        element: <Payment />,
      },
      {
        path: 'confirmacao',
        element: <Confirmation />,
        action: confirmationAction,
      },
    ],
  },
])
