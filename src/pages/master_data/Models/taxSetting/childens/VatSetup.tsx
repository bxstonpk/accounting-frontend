import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, Percent } from 'lucide-react'

const mockVatRates = [
    { id: 1, code: 'VAT7', name_th: 'ภาษีมูลค่าเพิ่ม 7%', name_en: 'VAT 7%', rate: 7, is_default: true, status: 'Active' },
    { id: 2, code: 'VAT0', name_th: 'ภาษีมูลค่าเพิ่ม 0%', name_en: 'VAT 0% (Export)', rate: 0, is_default: false, status: 'Active' },
    { id: 3, code: 'EXEMPT', name_th: 'ยกเว้นภาษี', name_en: 'VAT Exempt', rate: 0, is_default: false, status: 'Active' },
    { id: 4, code: 'NO_TAX', name_th: 'ไม่มีภาษี', name_en: 'No Tax', rate: 0, is_default: false, status: 'Active' },
]

export const VatSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockVatRates.filter(
        (v) => v.name_th.includes(search) || v.name_en.toLowerCase().includes(search.toLowerCase()) || v.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">VAT Rates</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage value added tax rates</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add VAT Rate
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search VAT rates..." value={search} onChange={(e) => setSearch(e.target.value)}
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
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Rate %</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Default</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((v) => (
                            <tr key={v.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600 font-mono">{v.code}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                                            <Percent size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{v.name_en}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{v.name_th}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-right font-mono text-sm font-semibold text-slate-700">{v.rate}%</td>
                                <td className="px-4 py-3">
                                    {v.is_default && (
                                        <span className="inline-block px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 text-xs font-medium">Default</span>
                                    )}
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${v.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${v.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {v.status}
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
                            <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-400">No VAT rates found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
