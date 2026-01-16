import React from 'react'

export const KPI: React.FC<{ title: string; value: string; delta?: string }> = ({ title, value, delta }) => {
    return <>
        <div className="min-w-[12rem]">
            <div className="text-sm text-gray-600">{title}</div>
            <div className="mt-2 flex items-baseline space-x-3">
                <div className="text-2xl font-semibold">{value}</div>
                {delta && (
                    <div className={`text-sm font-medium ${delta.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                        {delta}
                    </div>
                )}
            </div>
        </div>
    </>
}
