import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, Layers } from 'lucide-react'

const mockDepartments = [
    { id: 1, code: 'FIN', name_th: 'ฝ่ายการเงิน', branch: 'สำนักงานใหญ่', parent: '-', cost_center_code: 'CC-FIN', status: 'Active' },
    { id: 2, code: 'ACC', name_th: 'ฝ่ายบัญชี', branch: 'สำนักงานใหญ่', parent: 'ฝ่ายการเงิน', cost_center_code: 'CC-ACC', status: 'Active' },
    { id: 3, code: 'HR', name_th: 'ฝ่ายทรัพยากรบุคคล', branch: 'สำนักงานใหญ่', parent: '-', cost_center_code: 'CC-HR', status: 'Active' },
    { id: 4, code: 'IT', name_th: 'ฝ่ายเทคโนโลยีสารสนเทศ', branch: 'สำนักงานใหญ่', parent: '-', cost_center_code: 'CC-IT', status: 'Active' },
    { id: 5, code: 'MKT', name_th: 'ฝ่ายการตลาด', branch: 'สาขาสีลม', parent: '-', cost_center_code: 'CC-MKT', status: 'Inactive' },
]

export const DepartmentSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockDepartments.filter(
        (d) => d.name_th.includes(search) || d.code.toLowerCase().includes(search.toLowerCase()) || d.cost_center_code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Departments</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage company departments</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add Department
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search departments..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Department</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Branch</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Parent</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Cost Center</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((d) => (
                            <tr key={d.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{d.code}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                            <Layers size={16} />
                                        </div>
                                        <p className="font-medium text-slate-800">{d.name_th}</p>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">{d.branch}</td>
                                <td className="px-4 py-3 text-sm text-slate-500">{d.parent}</td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600 font-mono">{d.cost_center_code}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${d.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${d.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {d.status}
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
                            <tr><td colSpan={7} className="px-4 py-12 text-center text-sm text-slate-400">No departments found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
