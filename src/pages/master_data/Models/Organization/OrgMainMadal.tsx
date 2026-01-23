import React from 'react'

type ModalProps = {
    children: React.ReactNode
}

export default function OrgMainMadal({ children }: ModalProps) {
    return (
        <div>
            {children}
        </div>
    )
}
