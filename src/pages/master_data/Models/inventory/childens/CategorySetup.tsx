import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, FolderTree } from 'lucide-react'

const mockCategories = [
    { id: 1, code: 'CAT-01', name_th: 'อิเล็กทรอนิกส์', name_en: 'Electronics', parent: '-', level: 1, status: 'Active' },
    { id: 2, code: 'CAT-02', name_th: 'วัสดุสิ้นเปลือง', name_en: 'Consumables', parent: '-', level: 1, status: 'Active' },
    { id: 3, code: 'CAT-03', name_th: 'วัตถุดิบ', name_en: 'Raw Materials', parent: '-', level: 1, status: 'Active' },
    { id: 4, code: 'CAT-04', name_th: 'สินค้าสำเร็จรูป', name_en: 'Finished Goods', parent: '-', level: 1, status: 'Active' },
    { id: 5, code: 'CAT-05', name_th: 'บริการ', name_en: 'Services', parent: '-', level: 1, status: 'Active' },
    { id: 6, code: 'CAT-06', name_th: 'อะไหล่', name_en: 'Spare Parts', parent: 'Electronics', level: 2, status: 'Inactive' },
]

export const CategorySetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockCategories.filter(
        (c) => c.name_th.includes(search) || c.name_en.toLowerCase().includes(search.toLowerCase()) || c.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Product Categories</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage product categories</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add Category
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search categories..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Category</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Parent</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Level</th>
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
                                        <div className="h-9 w-9 rounded-lg bg-cyan-50 text-cyan-500 flex items-center justify-center shrink-0">
                                            <FolderTree size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{c.name_en}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{c.name_th}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-500">{c.parent}</td>
                                <td className="px-4 py-3 text-sm text-slate-500 text-center">{c.level}</td>
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
                            <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-400">No categories found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
