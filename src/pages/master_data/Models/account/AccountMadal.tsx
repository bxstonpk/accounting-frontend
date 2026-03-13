import React, { useState } from 'react'
import { Plus, Search, MoreHorizontal, BookOpen } from 'lucide-react'

const accountTypeColors: Record<string, string> = {
    'Asset': 'bg-blue-50 text-blue-600',
    'Liability': 'bg-red-50 text-red-600',
    'Equity': 'bg-purple-50 text-purple-600',
    'Revenue': 'bg-emerald-50 text-emerald-600',
    'Expense': 'bg-orange-50 text-orange-600',
    'COGS': 'bg-amber-50 text-amber-600',
}

const mockAccounts = [
    { id: 1, code: '1000', name_th: 'สินทรัพย์', name_en: 'Assets', account_type: 'Asset', level: 1, is_header: true },
    { id: 2, code: '1100', name_th: 'เงินสดและรายการเทียบเท่า', name_en: 'Cash & Cash Equivalents', account_type: 'Asset', level: 2, is_header: true },
    { id: 3, code: '1110', name_th: 'เงินสด', name_en: 'Cash on Hand', account_type: 'Asset', level: 3, is_header: false },
    { id: 4, code: '1120', name_th: 'เงินฝากธนาคาร', name_en: 'Bank Deposits', account_type: 'Asset', level: 3, is_header: false },
    { id: 5, code: '1200', name_th: 'ลูกหนี้การค้า', name_en: 'Accounts Receivable', account_type: 'Asset', level: 2, is_header: false },
    { id: 6, code: '1300', name_th: 'สินค้าคงเหลือ', name_en: 'Inventory', account_type: 'Asset', level: 2, is_header: false },
    { id: 7, code: '2000', name_th: 'หนี้สิน', name_en: 'Liabilities', account_type: 'Liability', level: 1, is_header: true },
    { id: 8, code: '2100', name_th: 'เจ้าหนี้การค้า', name_en: 'Accounts Payable', account_type: 'Liability', level: 2, is_header: false },
    { id: 9, code: '2200', name_th: 'ภาษีมูลค่าเพิ่มค้างจ่าย', name_en: 'VAT Payable', account_type: 'Liability', level: 2, is_header: false },
    { id: 10, code: '3000', name_th: 'ส่วนของผู้ถือหุ้น', name_en: 'Equity', account_type: 'Equity', level: 1, is_header: true },
    { id: 11, code: '3100', name_th: 'ทุนจดทะเบียน', name_en: 'Registered Capital', account_type: 'Equity', level: 2, is_header: false },
    { id: 12, code: '4000', name_th: 'รายได้', name_en: 'Revenue', account_type: 'Revenue', level: 1, is_header: true },
    { id: 13, code: '4100', name_th: 'รายได้จากการขาย', name_en: 'Sales Revenue', account_type: 'Revenue', level: 2, is_header: false },
    { id: 14, code: '5000', name_th: 'ค่าใช้จ่าย', name_en: 'Expenses', account_type: 'Expense', level: 1, is_header: true },
    { id: 15, code: '5100', name_th: 'ต้นทุนขาย', name_en: 'Cost of Goods Sold', account_type: 'COGS', level: 2, is_header: false },
    { id: 16, code: '5200', name_th: 'ค่าใช้จ่ายในการขาย', name_en: 'Selling Expenses', account_type: 'Expense', level: 2, is_header: false },
    { id: 17, code: '5300', name_th: 'ค่าใช้จ่ายในการบริหาร', name_en: 'Administrative Expenses', account_type: 'Expense', level: 2, is_header: false },
]

export const AccountMadal: React.FC = () => {
    const [search, setSearch] = useState('')

    const filtered = mockAccounts.filter(
        (a) => a.name_th.includes(search) || a.name_en.toLowerCase().includes(search.toLowerCase()) || a.code.includes(search)
    )

    return (
        <div className="space-y-6 h-full flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold text-slate-800">Chart of Accounts</h1>
                    <p className="text-sm text-slate-500 mt-0.5">Manage account structure</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-sm hover:scale-105 transition">
                    <Plus size={16} />
                    Add Account
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Search accounts..." value={search} onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <span className="text-xs text-slate-400">{filtered.length} records</span>
            </div>

            <div className="flex-1 overflow-auto rounded-xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                    <thead>
                        <tr className="bg-slate-50/80">
                            <th className="px-4 py-3 font-medium text-slate-500">Code</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Account Name</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Type</th>
                            <th className="px-4 py-3 font-medium text-slate-500">Level</th>
                            <th className="px-4 py-3 font-medium text-slate-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map((a) => (
                            <tr key={a.id} className={`hover:bg-slate-50/50 transition ${a.is_header ? 'bg-slate-50/30' : ''}`}>
                                <td className="px-4 py-3 font-mono text-xs text-slate-600 font-semibold">{a.code}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3" style={{ paddingLeft: `${(a.level - 1) * 20}px` }}>
                                        {a.is_header && (
                                            <div className="h-7 w-7 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                                                <BookOpen size={14} />
                                            </div>
                                        )}
                                        <div>
                                            <p className={`text-slate-800 ${a.is_header ? 'font-semibold' : ''}`}>{a.name_en}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{a.name_th}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${accountTypeColors[a.account_type] || 'bg-slate-100 text-slate-600'}`}>
                                        {a.account_type}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-500 text-center">{a.level}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr><td colSpan={5} className="px-4 py-12 text-center text-sm text-slate-400">No accounts found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
