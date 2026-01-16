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

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/master-data",
    element: <MasterData />
  }
])

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
