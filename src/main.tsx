import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// import page components
import { DashboardPage } from './pages/dashboard/Dashboard'
import { LoginPage } from './pages/login/Login'
import { MasterData } from './pages/master_data/MasterData'
import { OrgModal } from './pages/master_data/Models/Organization/OrgModal'
import { CustomerMadal } from './pages/master_data/Models/customer/CustomerMadal'
import { OrderMadal } from './pages/master_data/Models/order/OrderMadal'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  },
  {
    path: '/master-data',
    element: <MasterData />,
    children: [
      {
        path: 'organization',
        element: <OrgModal />
      },
      {
        path: 'customer',
        element: <CustomerMadal />
      },
      {
        path: 'orders',
        element: <OrderMadal />
      }
    ]
  }
])

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
