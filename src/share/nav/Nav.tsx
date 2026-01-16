import React from 'react'

// import config
import { config } from '../../config'

export const ShareNav: React.FC = () => {
    const { navigation } = config;

    return (
        <div className='
            content-center
            rounded-3xl 
            bg-white/10 
            backdrop-blur-2xl 
            border 
            border-white/20 
            shadow-xl
            transition 
            duration-500 
            hover:bg-white/20 
            hover:shadow-2xl 
            fixed 
            top-4 
            left-1/2 
            -translate-x-1/2 
            w-[90%] 
            max-w-5xl
            bg-white/95 
            backdrop-blur-md 
            rounded-2xl 
            shadow-lg 
            z-50' >
            <div className='flex justify-center items-center h-14'>
                <ul className='flex space-x-8 text-gray-800 font-medium relative'>
                    {Object.values(navigation).map((item) => (
                        <li key={item.path} className='hover:text-blue-500 transition'>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
