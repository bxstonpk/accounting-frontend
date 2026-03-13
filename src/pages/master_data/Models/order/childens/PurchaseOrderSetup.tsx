import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, ShoppingCart } from 'lucide-react'

const statusColors: Record<string, string> = {
    'DRAFT': 'bg-slate-100 text-slate-600',
    'CONFIRMED': 'bg-blue-50 text-blue-600',
    'PARTIAL': 'bg-amber-50 text-amber-600',
    'RECEIVED': 'bg-emerald-50 text-emerald-600',
    'CANCELLED': 'bg-red-50 text-red-500',
}

const mockPOs = [
    { id: 1, po_no: 'PO-2024-0001', po_date: '2024-01-15', vendor: 'Thai Supply Co., Ltd.', total: 250000, currency: 'THB', status: 'RECEIVED' },
    { id: 2, po_no: 'PO-2024-0002', po_date: '2024-01-20', vendor: 'Global Mat Co., Ltd.', total: 1500000, currency: 'THB', status: 'CONFIRMED' },
    { id: 3, po_no: 'PO-2024-0003', po_date: '2024-02-01', vendor: 'Charoenkij Shop', total: 45000, currency: 'THB', status: 'PARTIAL' },
    { id: 4, po_no: 'PO-2024-0004', po_date: '2024-02-10', vendor: 'City Logistics Co., Ltd.', total: 320000, currency: 'THB', status: 'DRAFT' },
    { id: 5, po_no: 'PO-2024-0005', po_date: '2024-02-15', vendor: 'Thai Supply Co., Ltd.', total: 180000, currency: 'THB', status: 'CANCELLED' },
]

export const PurchaseOrderSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockPOs.filter(
        (po) => po.po_no.toLowerCase().includes(search.toLowerCase()) || po.vendor.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Purchase Orders</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage purchase orders</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Create PO
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search purchase orders..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">PO No.</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Date</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Vendor</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Amount</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((po) => (
                            <tr key={po.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                            <ShoppingCart size={16} />
                                        </div>
                                        <span className="font-medium text-slate-800 font-mono text-xs">{po.po_no}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">{po.po_date}</td>
                                <td className="px-4 py-3 text-sm text-slate-700">{po.vendor}</td>
                                <td className="px-4 py-3 text-sm text-slate-800 text-right font-mono font-medium">฿{po.total.toLocaleString()}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[po.status] || 'bg-slate-100 text-slate-600'}`}>
                                        {po.status}
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
                            <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-400">No purchase orders found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
