import React from 'react'

// import pages
import { DashboardPage } from '../pages/dashboard/Dashboard'
import { LoginPage } from '../pages/login/Login'
import { MasterData } from '../pages/master_data/MasterData'

export const ComponentsMap: Record<string, React.FC> = {
  dashboard: DashboardPage,
  login: LoginPage,
  masterData: MasterData,
}
