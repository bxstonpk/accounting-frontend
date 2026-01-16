import React from 'react'

export const SideNav: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className = "", children }) => {
    return <>
        <div className={`
            relative 
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
            ${className}`}>
            {children}
        </div>
    </>
}
