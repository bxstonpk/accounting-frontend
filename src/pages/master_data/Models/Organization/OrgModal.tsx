import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Building2, GitBranch, Layers } from 'lucide-react'

// import components
import OrgMainMadal from './OrgMainMadal'

const sidebarItems = [
    { label: 'Companies', path: 'companies', icon: Building2 },
    { label: 'Branches', path: 'branches', icon: GitBranch },
    { label: 'Departments', path: 'departments', icon: Layers },
]

export const OrgModal: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [activeItem, setActiveItem] = useState<string | null>(null)

    const state = location.state as {
        backgroundLocation?: Location
        actionId?: string
    }

    const handleNavClick = (item: typeof sidebarItems[0]) => {
        setActiveItem(item.path)
        navigate(`/master-data/organization/${item.path}`, {
            state: { backgroundLocation: location },
        })
    }

    return (
        <div className="flex gap-4 h-[calc(100svh-12rem)]">
            {/* Sidebar */}
            <div className="w-56 shrink-0">
                <div className="h-full rounded-2xl bg-white border border-slate-200 shadow-sm p-3 flex flex-col">
                    <div className="px-3 pt-2 pb-4">
                        <h2 className="text-sm font-semibold text-slate-800">Organization</h2>
                        <p className="text-xs text-slate-400 mt-0.5">Structure & settings</p>
                    </div>

                    <nav className="flex-1 flex flex-col gap-1">
                        {sidebarItems.map((item) => {
                            const Icon = item.icon
                            const isActive = activeItem === item.path
                            return (
                                <button
                                    key={item.path}
                                    onClick={() => handleNavClick(item)}
                                    className={`
                                        group flex items-center gap-3 w-full px-3 py-2.5
                                        rounded-xl text-left text-sm font-medium transition duration-200
                                        ${isActive
                                            ? 'bg-blue-50 text-blue-600 shadow-sm'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                                        }
                                    `}
                                >
                                    <Icon size={18} className={`shrink-0 transition ${isActive ? 'text-blue-500' : 'text-slate-400 group-hover:text-slate-600'}`} />
                                    {item.label}
                                </button>
                            )
                        })}
                    </nav>

                    <div className="mt-auto pt-3 border-t border-slate-100 px-3 pb-1">
                        <p className="text-[10px] text-slate-300 text-center">MRP Organization Module</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
                <div className="h-full rounded-2xl bg-white border border-slate-200 shadow-sm p-6 overflow-y-auto">
                    {state?.backgroundLocation ? (
                        <OrgMainMadal>
                            <Outlet />
                        </OrgMainMadal>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="h-16 w-16 rounded-2xl bg-blue-50 text-blue-400 flex items-center justify-center mb-4">
                                <Building2 size={32} />
                            </div>
                            <h2 className="text-lg font-semibold text-slate-700">Select a menu</h2>
                            <p className="text-sm text-slate-400 mt-1 max-w-xs">
                                Choose an option from the sidebar to manage organization structure and settings
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
