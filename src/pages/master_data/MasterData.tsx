import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

// import components
import Modal from './components/Modal'

// import from share
import { ShareNav } from '../../share/nav/Nav'

// import config
import { config } from '../../config'

const { navigation } = config

export const MasterData: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as {
        backgroundLocation?: Location;
        actionId?: string;
    }

    return <>
        <div id='master-data-main'>
            <ShareNav />
            <div className="bg-gradient-to-br from-gray-100 to-gray-100 content-center p-4 md:p-6">
                <div className="pt-16 max-w-7xl mx-auto">
                    <div className='px-6 w-[calc(100svw*9/12)] h-[calc(100svh-7rem)]'>
                        {
                            children ? (
                                children
                            ) : (
                                <div className='h-full rounded-3xl bg-white/70 shadow'>
                                    <DefaultMasterView />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

        {state?.backgroundLocation && (
            <Modal onClose={() => navigate(-1)}>
                <Outlet />
            </Modal>
        )}
    </>
}

const DefaultMasterView = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className='space-y-6 p-6'>

            <div>
                <h1 className="text-2xl font-semibold text-slate-800">
                    Master Data
                </h1>
                <p className="text-sm text-slate-500">
                    Manage core data used across the system
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(navigation.masterData.sub).map((item) => (
                    <button
                        key={item.path}
                        onClick={() => {

                            navigate(item.path, {
                                state: {
                                    backgroundLocation: location,
                                }
                            })
                        }}
                        className='
                            group
                            relative
                            rounded-2xl
                            bg-white
                            border border-slate-200
                            shadow-sm
                            p-6
                            text-left
                            transition
                            hover:-translate-y-1
                            hover:shadow-xl
                        '>
                        {/* subtle glow */}
                        <div className='
                            absolute inset-0
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-500/5
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition'
                        />
                        <div className='relative z-10 flex items-start gap-4'>
                            <div className='
                                flex 
                                h-12 
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-50
                                text-blue-600
                                text-xl
                            '>
                                <FontAwesomeIcon icon={item.icon} />
                            </div>

                            <div className='flex-1'>
                                <h3 className='font-semibold text-slate-800'>
                                    {item.title}
                                </h3>
                                <p className='mt-1 text-sm text-slate-500'>
                                    Manage {item.title.toLowerCase()} data
                                </p>

                                <div className='mt-4 inline-flex items-center text-sm font-medium text-blue-600'>
                                    Manage
                                    <span className='ml-1 transition group-hover:translate-x-1'>→</span>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};