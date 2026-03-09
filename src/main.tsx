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
import { Revenues } from './pages/revenues/Revenues'
import { CustomerMadal } from './pages/master_data/Models/customer/CustomerMadal'
import { OrderMadal } from './pages/master_data/Models/order/OrderMadal'
import { SupplierMadal } from './pages/master_data/Models/supplier/SupplierMadal'
import { BankMadal } from './pages/master_data/Models/bank/BankMadal'
import { AccountMadal } from './pages/master_data/Models/account/AccountMadal'
import { InventoryMadal } from './pages/master_data/Models/inventory/InventoryMadal'
import { CrmManal } from './pages/master_data/Models/crm/CrmManal'
import { TaxsettingMadal } from './pages/master_data/Models/taxSetting/TaxsettingMadal'
import { OrgSetup } from './pages/master_data/Models/Organization/childens/OrgSetup'
import { Quotation } from './pages/revenues/sub-pages/quotation/Quotation'

// import class widgets
import { ServiceNotImplement } from './widgets/ServiceNotImplement'

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
        element: <OrgModal />,
        children: [
          {
            path: 'organization',
            element: <OrgSetup />
          }
        ],
      },
      {
        path: 'customer',
        element: <CustomerMadal />
      },
      {
        path: 'supplier',
        element: <SupplierMadal />
      },
      {
        path: 'bank',
        element: <BankMadal />
      },
      {
        path: 'account',
        element: <AccountMadal />
      },
      {
        path: 'inventory',
        element: <InventoryMadal />
      },
      {
        path: 'crm',
        element: <CrmManal />
      },
      {
        path: 'orders',
        element: <OrderMadal />
      },
      {
        path: 'tax-settings',
        element: <TaxsettingMadal />
      },
    ]
  },
  {
    path: '/revenues',
    element: <Revenues />,
  },
  {
    path: '/revenues/quotation',
    element: <Quotation />,
  },
  {
    path: '/expenses',
    element: <ServiceNotImplement />
  }
])

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
