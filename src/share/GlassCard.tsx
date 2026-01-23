import React from 'react'

export const GlassCard: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className = "", children }) => {
    return <>
        <div className={`
            relative 
            rounded-3xl 
            bg-white
            backdrop-blur-2xl 
            border 
            border-white/20 
            shadow-xl p-8 
            transition 
            duration-500 
            hover:bg-white/20 
            hover:shadow-2xl 
            ${className}`}>
                {children}
        </div>
    </>
}

export const GlassCardRegular: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className = "", children }) => {
    return <>
        <div className={`
            relative 
            rounded-3xl 
            bg-white
            backdrop-blur-2xl 
            border 
            border-white/20 
            shadow-xl p-2
            transition 
            duration-500 
            hover:bg-white/20 
            hover:shadow-2xl 
            ${className}`}>
                {children}
        </div>
    </>
}