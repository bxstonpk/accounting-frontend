import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, GitBranch, MapPin, Phone } from 'lucide-react'

const mockBranches = [
    { id: 1, code: 'HQ', name_th: 'สำนักงานใหญ่', address: '123 ถ.สุขุมวิท กรุงเทพฯ', phone: '02-123-4567', branch_no: '00000', status: 'Active' },
    { id: 2, code: 'BKK-02', name_th: 'สาขาสีลม', address: '456 ถ.สีลม กรุงเทพฯ', phone: '02-234-5678', branch_no: '00001', status: 'Active' },
    { id: 3, code: 'CNX-01', name_th: 'สาขาเชียงใหม่', address: '789 ถ.ห้วยแก้ว เชียงใหม่', phone: '053-111-2222', branch_no: '00002', status: 'Active' },
    { id: 4, code: 'CHB-01', name_th: 'สาขาชลบุรี', address: '321 ถ.สุขุมวิท ชลบุรี', phone: '038-333-4444', branch_no: '00003', status: 'Inactive' },
]

export const BranchSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockBranches.filter(
        (b) => b.name_th.includes(search) || b.code.toLowerCase().includes(search.toLowerCase()) || b.branch_no.includes(search)
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Branches</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage company branches</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add Branch
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search branches..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Branch</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Branch No</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Contact</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((b) => (
                            <tr key={b.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{b.code}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-violet-50 text-violet-500 flex items-center justify-center shrink-0">
                                            <GitBranch size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{b.name_th}</p>
                                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                                <MapPin size={10} /> {b.address}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600 font-mono">{b.branch_no}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <p className="text-xs text-slate-500 flex items-center gap-1">
                                        <Phone size={10} /> {b.phone}
                                    </p>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${b.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${b.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {b.status}
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
                            <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-400">No branches found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
