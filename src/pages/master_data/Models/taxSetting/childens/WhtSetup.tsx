import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, FileText } from 'lucide-react'

const mockWhtTypes = [
    { id: 1, code: 'WHT-3', name_th: 'ค่าจ้างทำของ', name_en: 'Subcontract / Service Fee', wht_type: 'ND53', rate: 3, status: 'Active' },
    { id: 2, code: 'WHT-5', name_th: 'ค่าเช่า', name_en: 'Rental Fee', wht_type: 'ND53', rate: 5, status: 'Active' },
    { id: 3, code: 'WHT-2', name_th: 'ค่าโฆษณา', name_en: 'Advertising Fee', wht_type: 'ND53', rate: 2, status: 'Active' },
    { id: 4, code: 'WHT-1', name_th: 'ค่าขนส่ง', name_en: 'Transportation Fee', wht_type: 'ND53', rate: 1, status: 'Active' },
    { id: 5, code: 'WHT-SAL', name_th: 'เงินเดือน/ค่าจ้าง', name_en: 'Salary / Wages', wht_type: 'ND1', rate: 5, status: 'Active' },
    { id: 6, code: 'WHT-10', name_th: 'ค่าสิทธิ', name_en: 'Royalties', wht_type: 'ND3', rate: 10, status: 'Inactive' },
]

const whtTypeColors: Record<string, string> = {
    'ND1': 'bg-blue-50 text-blue-600',
    'ND3': 'bg-violet-50 text-violet-600',
    'ND53': 'bg-amber-50 text-amber-600',
}

export const WhtSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockWhtTypes.filter(
        (w) => w.name_th.includes(search) || w.name_en.toLowerCase().includes(search.toLowerCase()) || w.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">WHT Types</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage withholding tax types</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add WHT Type
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search WHT types..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Description</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Form Type</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Rate %</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((w) => (
                            <tr key={w.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600 font-mono">{w.code}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                                            <FileText size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{w.name_en}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{w.name_th}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${whtTypeColors[w.wht_type] || 'bg-slate-100 text-slate-600'}`}>
                                        ภ.ง.ด.{w.wht_type.replace('ND', '')}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right font-mono text-sm font-semibold text-slate-700">{w.rate}%</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${w.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${w.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {w.status}
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
                            <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-400">No WHT types found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
