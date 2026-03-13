import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, Building2, MapPin, Phone } from 'lucide-react'

const mockCompanies = [
    { id: 1, code: 'COM-001', name_th: 'บริษัท เอซีเอ็มอี จำกัด', name_en: 'ACME Co., Ltd.', tax_id: '0105536012345', address: 'กรุงเทพมหานคร', phone: '02-123-4567', base_currency: 'THB', fiscal_year_start: 1, status: 'Active' },
    { id: 2, code: 'COM-002', name_th: 'บริษัท สยามเทค จำกัด', name_en: 'SiamTech Co., Ltd.', tax_id: '0105536067890', address: 'เชียงใหม่', phone: '053-987-6543', base_currency: 'THB', fiscal_year_start: 1, status: 'Active' },
    { id: 3, code: 'COM-003', name_th: 'บริษัท อีสเทิร์น กรุ๊ป จำกัด', name_en: 'Eastern Group Co., Ltd.', tax_id: '0105536011111', address: 'ชลบุรี', phone: '038-456-7890', base_currency: 'THB', fiscal_year_start: 4, status: 'Inactive' },
]

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const OrgSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockCompanies.filter(
        (o) => o.name_th.includes(search) || o.name_en.toLowerCase().includes(search.toLowerCase()) || o.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Companies</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage company information</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add Company
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search companies..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Company</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Tax ID</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Currency</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Fiscal Start</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((org) => (
                            <tr key={org.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{org.code}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                            <Building2 size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{org.name_en}</p>
                                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                                <MapPin size={10} /> {org.address}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 font-mono text-xs text-slate-600">{org.tax_id}</td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600">{org.base_currency}</span>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">{monthNames[org.fiscal_year_start - 1]}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${org.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${org.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {org.status}
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
                            <tr><td colSpan={7} className="px-4 py-12 text-center text-sm text-slate-400">No companies found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
