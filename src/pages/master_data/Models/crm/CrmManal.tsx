import React from 'react'
import { HeartHandshake } from 'lucide-react'

export const CrmManal: React.FC = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 rounded-2xl bg-blue-50 text-blue-400 flex items-center justify-center mb-4">
                <HeartHandshake size={32} />
            </div>
            <h2 className="text-lg font-semibold text-slate-700">CRM Module</h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xs">
                Customer relationship management features are coming soon
            </p>
            <span className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-medium">
                Coming Soon
            </span>
        </div>
    )
}
