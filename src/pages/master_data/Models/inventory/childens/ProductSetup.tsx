import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, Package } from 'lucide-react'

const mockProducts = [
    { id: 1, code: 'PRD-001', name_th: 'สินค้า A', name_en: 'Product A', product_type: 'PRODUCT', category: 'Electronics', uom: 'PCS', standard_cost: 100, list_price: 150, tax_type: 'VAT7', status: 'Active' },
    { id: 2, code: 'PRD-002', name_th: 'สินค้า B', name_en: 'Product B', product_type: 'PRODUCT', category: 'Electronics', uom: 'PCS', standard_cost: 200, list_price: 350, tax_type: 'VAT7', status: 'Active' },
    { id: 3, code: 'RAW-001', name_th: 'วัตถุดิบ C', name_en: 'Raw Material C', product_type: 'RAW_MATERIAL', category: 'Materials', uom: 'KG', standard_cost: 50, list_price: 0, tax_type: 'VAT7', status: 'Active' },
    { id: 4, code: 'SRV-001', name_th: 'บริการติดตั้ง', name_en: 'Installation Service', product_type: 'SERVICE', category: 'Services', uom: 'JOB', standard_cost: 0, list_price: 5000, tax_type: 'VAT7', status: 'Active' },
    { id: 5, code: 'FG-001', name_th: 'สินค้าสำเร็จรูป D', name_en: 'Finished Good D', product_type: 'FINISHED_GOOD', category: 'Finished Goods', uom: 'PCS', standard_cost: 300, list_price: 500, tax_type: 'VAT7', status: 'Inactive' },
]

const typeColors: Record<string, string> = {
    'PRODUCT': 'bg-blue-50 text-blue-600',
    'SERVICE': 'bg-violet-50 text-violet-600',
    'RAW_MATERIAL': 'bg-amber-50 text-amber-600',
    'FINISHED_GOOD': 'bg-emerald-50 text-emerald-600',
}

export const ProductSetup: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockProducts.filter(
        (p) => p.name_th.includes(search) || p.name_en.toLowerCase().includes(search.toLowerCase()) || p.code.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Products</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage products and services</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add Product
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Product</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Type</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Category</th>
                            <th className="px-4 py-3 font-medium text-slate-500">UOM</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Cost</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Price</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((p) => (
                            <tr key={p.id} className="hover:bg-slate-50/50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{p.code}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                            <Package size={16} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-800">{p.name_en}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{p.name_th}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${typeColors[p.product_type] || 'bg-slate-100 text-slate-600'}`}>
                                        {p.product_type.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">{p.category}</td>
                                <td className="px-4 py-3">
                                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600">{p.uom}</span>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600 text-right font-mono">฿{p.standard_cost.toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-slate-800 text-right font-mono font-medium">฿{p.list_price.toLocaleString()}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${p.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                        <span className={`h-1.5 w-1.5 rounded-full ${p.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                        {p.status}
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
                            <tr><td colSpan={9} className="px-4 py-12 text-center text-sm text-slate-400">No products found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
