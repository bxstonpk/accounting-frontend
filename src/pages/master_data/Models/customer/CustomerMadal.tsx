import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, Users, Phone, Mail, CreditCard } from 'lucide-react'

const mockCustomers = [
    { id: 1, code: 'CUS-001', name_th: 'บริษัท สยามฟู้ด จำกัด', name_en: 'Siam Food Co., Ltd.', tax_id: '0105536012345', branch_no: '00000', credit_days: 30, credit_limit: 500000, phone: '02-111-2222', email: 'contact@siamfood.com', partner_category: 'JURISTIC', status: 'Active' },
    { id: 2, code: 'CUS-002', name_th: 'บริษัท โกลบอล เทรด จำกัด', name_en: 'Global Trade Co., Ltd.', tax_id: '0105536067890', branch_no: '00000', credit_days: 45, credit_limit: 1000000, phone: '02-333-4444', email: 'info@globaltrade.com', partner_category: 'JURISTIC', status: 'Active' },
    { id: 3, code: 'CUS-003', name_th: 'นายสมชาย ใจดี', name_en: 'Somchai Jaidee', tax_id: '1100500123456', branch_no: '-', credit_days: 15, credit_limit: 100000, phone: '081-234-5678', email: 'somchai@email.com', partner_category: 'INDIVIDUAL', status: 'Active' },
    { id: 4, code: 'CUS-004', name_th: 'บริษัท อีสเทิร์น ซัพพลาย จำกัด', name_en: 'Eastern Supply Co., Ltd.', tax_id: '0105536011111', branch_no: '00001', credit_days: 30, credit_limit: 300000, phone: '038-555-6666', email: 'info@eastern.com', partner_category: 'JURISTIC', status: 'Inactive' },
]

export const CustomerMadal: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockCustomers.filter(
        (c) => c.name_th.includes(search) || c.name_en.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Customers</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage customer partners</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add Customer
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Customer</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Tax ID</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Credit</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Contact</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Category</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((c) => (
                            <tr key={c.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{c.code}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                            <Users size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{c.name_en}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{c.name_th}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 font-mono text-xs text-slate-600">{c.tax_id}</td>
                                <td className="px-4 py-3">
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-600 flex items-center gap-1"><CreditCard size={10} /> {c.credit_days} days</p>
                                        <p className="text-xs text-slate-500">Limit: ฿{c.credit_limit.toLocaleString()}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="space-y-1">
                                        <p className="text-xs text-slate-500 flex items-center gap-1"><Phone size={10} /> {c.phone}</p>
                                        <p className="text-xs text-slate-500 flex items-center gap-1"><Mail size={10} /> {c.email}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${c.partner_category === 'JURISTIC' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                                        {c.partner_category === 'JURISTIC' ? 'Juristic' : 'Individual'}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${c.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${c.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {c.status}
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
                            <tr><td colSpan={8} className="px-4 py-12 text-center text-sm text-slate-400">No customers found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
