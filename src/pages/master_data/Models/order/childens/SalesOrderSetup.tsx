import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, ShoppingBag } from 'lucide-react'

const statusColors: Record<string, string> = {
    'DRAFT': 'bg-slate-100 text-slate-600',
    'CONFIRMED': 'bg-blue-50 text-blue-600',
    'PARTIAL': 'bg-amber-50 text-amber-600',
    'SHIPPED': 'bg-violet-50 text-violet-600',
    'INVOICED': 'bg-emerald-50 text-emerald-600',
    'CANCELLED': 'bg-red-50 text-red-500',
}

const mockSOs = [
    { id: 1, so_no: 'SO-2024-0001', order_date: '2024-01-15', customer: 'Siam Food Co., Ltd.', total: 375000, currency: 'THB', status: 'INVOICED' },
    { id: 2, so_no: 'SO-2024-0002', order_date: '2024-01-22', customer: 'Global Trade Co., Ltd.', total: 890000, currency: 'THB', status: 'SHIPPED' },
    { id: 3, so_no: 'SO-2024-0003', order_date: '2024-02-05', customer: 'Somchai Jaidee', total: 25000, currency: 'THB', status: 'CONFIRMED' },
    { id: 4, so_no: 'SO-2024-0004', order_date: '2024-02-12', customer: 'Eastern Supply Co., Ltd.', total: 150000, currency: 'THB', status: 'DRAFT' },
    { id: 5, so_no: 'SO-2024-0005', order_date: '2024-02-18', customer: 'Siam Food Co., Ltd.', total: 520000, currency: 'THB', status: 'PARTIAL' },
]

export const SalesOrderSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockSOs.filter(
        (so) => so.so_no.toLowerCase().includes(search.toLowerCase()) || so.customer.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Sales Orders</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage sales orders</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Create SO
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search sales orders..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">SO No.</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Date</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Customer</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Amount</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((so) => (
                            <tr key={so.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                            <ShoppingBag size={16} />
                                        </div>
                                        <span className="font-medium text-slate-800 font-mono text-xs">{so.so_no}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">{so.order_date}</td>
                                <td className="px-4 py-3 text-sm text-slate-700">{so.customer}</td>
                                <td className="px-4 py-3 text-sm text-slate-800 text-right font-mono font-medium">฿{so.total.toLocaleString()}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[so.status] || 'bg-slate-100 text-slate-600'}`}>
                                        {so.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-400">No sales orders found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
