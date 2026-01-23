import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

// import components
import { GlassCardRegular } from '../../../../share/GlassCard'
import OrgMainMadal from './OrgMainMadal'

export const OrgModal: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as {
        backgroundLocation?: Location;
        actionId?: string;
    }

    return <>
        <div className='flex'>
            <div className='flex-1'>
                <GlassCardRegular className='p-4 h-[calc(100svh-12rem)] flex flex-col gap-2'>
                    <button
                        onClick={
                            () => navigate("/master-data/organization/organization", {
                                state: {
                                    backgroundLocation: location,
                                }
                            })
                        }
                    >
                        <h1>Organization</h1>
                    </button>
                    <button>
                        <h1>Branch</h1>
                    </button>
                    <button>
                        <h1>Division</h1>
                    </button>
                    <button>
                        <h1>Job</h1>
                    </button>
                    <button>
                        <h1>Job Type</h1>
                    </button>
                    <button>
                        <h1>Revenue</h1>
                    </button>
                    <button>
                        <h1>Expenses</h1>
                    </button>
                </GlassCardRegular>
            </div>
            <div className='p-[calc(100svh-99svh)]'></div>
            <div className='
                flex-[5]
                rounded-3xl
                bg-white/70
                backdrop-blur-2xl 
                border
                border-white/20 
                shadow-xl 
                p-8 
                transition 
                duration-500 
                hover:shadow-2xl
                p-10'>
                { /* Main Content */ }
                <h1>Plese select an option</h1>

                {state?.backgroundLocation && (
                    <OrgMainMadal>
                        <Outlet />
                    </OrgMainMadal>
                )}
            </div>
        </div>
    </>
}
