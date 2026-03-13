import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, Ruler } from 'lucide-react'

const mockUoms = [
    { id: 1, code: 'PCS', name_th: 'ชิ้น', name_en: 'Pieces', status: 'Active' },
    { id: 2, code: 'KG', name_th: 'กิโลกรัม', name_en: 'Kilogram', status: 'Active' },
    { id: 3, code: 'BOX', name_th: 'กล่อง', name_en: 'Box', status: 'Active' },
    { id: 4, code: 'M', name_th: 'เมตร', name_en: 'Meter', status: 'Active' },
    { id: 5, code: 'L', name_th: 'ลิตร', name_en: 'Liter', status: 'Active' },
    { id: 6, code: 'JOB', name_th: 'งาน', name_en: 'Job', status: 'Active' },
    { id: 7, code: 'SET', name_th: 'ชุด', name_en: 'Set', status: 'Inactive' },
]

export const UomSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockUoms.filter(
        (u) => u.name_th.includes(search) || u.name_en.toLowerCase().includes(search.toLowerCase()) || u.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Unit of Measure</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage units of measurement</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add UOM
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search UOM..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Unit Name</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((u) => (
                            <tr key={u.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600 font-mono">{u.code}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                                            <Ruler size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{u.name_en}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{u.name_th}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${u.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${u.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {u.status}
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
                            <tr><td colSpan={4} className="px-4 py-12 text-center text-sm text-slate-400">No UOM found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
