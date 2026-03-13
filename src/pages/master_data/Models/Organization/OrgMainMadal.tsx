import React from 'react'

type ModalProps = {
    children: React.ReactNode
}

export default function OrgMainMadal({ children }: ModalProps) {
    return (
        <div className="animate-fadeIn h-full">
            {children}
        </div>
    )
}
