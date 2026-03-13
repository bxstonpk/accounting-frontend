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
import { Quotation } from './pages/revenues/sub-pages/quotation/Quotation'

// Organization children
import { OrgSetup } from './pages/master_data/Models/Organization/childens/OrgSetup'
import { BranchSetup } from './pages/master_data/Models/Organization/childens/BranchSetup'
import { DepartmentSetup } from './pages/master_data/Models/Organization/childens/DepartmentSetup'

// Inventory children
import { ProductSetup } from './pages/master_data/Models/inventory/childens/ProductSetup'
import { WarehouseSetup } from './pages/master_data/Models/inventory/childens/WarehouseSetup'
import { UomSetup } from './pages/master_data/Models/inventory/childens/UomSetup'
import { CategorySetup } from './pages/master_data/Models/inventory/childens/CategorySetup'

// Order children
import { PurchaseOrderSetup } from './pages/master_data/Models/order/childens/PurchaseOrderSetup'
import { SalesOrderSetup } from './pages/master_data/Models/order/childens/SalesOrderSetup'

// Tax Settings children
import { VatSetup } from './pages/master_data/Models/taxSetting/childens/VatSetup'
import { WhtSetup } from './pages/master_data/Models/taxSetting/childens/WhtSetup'

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
          { path: 'companies', element: <OrgSetup /> },
          { path: 'branches', element: <BranchSetup /> },
          { path: 'departments', element: <DepartmentSetup /> },
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
        element: <InventoryMadal />,
        children: [
          { path: 'products', element: <ProductSetup /> },
          { path: 'warehouses', element: <WarehouseSetup /> },
          { path: 'uom', element: <UomSetup /> },
          { path: 'categories', element: <CategorySetup /> },
        ],
      },
      {
        path: 'crm',
        element: <CrmManal />
      },
      {
        path: 'orders',
        element: <OrderMadal />,
        children: [
          { path: 'purchase', element: <PurchaseOrderSetup /> },
          { path: 'sales', element: <SalesOrderSetup /> },
        ],
      },
      {
        path: 'tax-settings',
        element: <TaxsettingMadal />,
        children: [
          { path: 'vat', element: <VatSetup /> },
          { path: 'wht', element: <WhtSetup /> },
        ],
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
