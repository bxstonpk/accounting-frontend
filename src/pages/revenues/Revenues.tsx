import React from 'react'
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

// import page components
import { ShareNav } from '../../share/nav/Nav'

// Mock data
const kpis = [
    {
        title: "Total Revenue",
        value: "฿ 12,450,000",
        trend: "+6.2%",
        positive: true,
    },
    {
        title: "Revenue (MTD)",
        value: "฿ 1,240,500",
        trend: "+3.1%",
        positive: true,
    },
    {
        title: "Revenue (YTD)",
        value: "฿ 8,920,300",
        trend: "+9.4%",
        positive: true,
    },
    {
        title: "Outstanding Revenue",
        value: "฿ 320,000",
        trend: "-4.8%",
        positive: false,
    },
]

const topCustomers = [
    { name: "ABC Co., Ltd.", amount: "฿ 1,200,000" },
    { name: "XYZ Trading", amount: "฿ 980,000" },
    { name: "Foo Group", amount: "฿ 760,500" },
]


export const Revenues: React.FC = () => {

    return <>
        <ShareNav />
        <div className="bg-gradient-to-br from-gray-100 to-gray-100 p-6 md:p-10">
            {/* top spacing because navbar is fixed */}
            <div className="pt-16 max-w-7xl mx-auto">
                <div className="space-y-8">
                    {/* Header */}
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-800">
                            Revenue Dashboard
                        </h1>
                        <p className="text-sm text-slate-500">
                            Overview of income performance and trends
                        </p>
                    </div>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {kpis.map((item) => (
                            <div
                                key={item.title}
                                className="
                                    relative 
                                    rounded-2xl 
                                    bg-white 
                                    p-6
                                    border 
                                    border-slate-200
                                    shadow-sm 
                                    hover:shadow-lg
                                    transition
                                "
                            >
                                {/* subtle glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />

                                <p className="relative text-sm text-slate-500">
                                    {item.title}
                                </p>
                                <p className="relative mt-2 text-2xl font-semibold text-slate-800">
                                    {item.value}
                                </p>

                                <div
                                    className={`relative mt-2 inline-flex items-center gap-1 text-sm font-medium ${item.positive ? "text-emerald-600" : "text-red-500"
                                        }`}
                                >
                                    {item.positive ? (
                                        <ArrowUpRight size={16} />
                                    ) : (
                                        <ArrowDownRight size={16} />
                                    )}
                                    {item.trend}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Middle Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Revenue Trend */}
                        <div className="lg:col-span-2 rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                            <h2 className="font-semibold text-slate-800">
                                Revenue Trend
                            </h2>
                            <p className="text-sm text-slate-500">
                                Monthly revenue overview
                            </p>

                            {/* Placeholder chart */}
                            <div className="mt-6 h-48 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400">
                                Chart Area
                            </div>
                        </div>

                        {/* Actionable Insights */}
                        <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                            <h3 className="font-semibold mb-3">Actions</h3>
                            <div className="flex flex-col gap-3">
                                <button 
                                    className="w-full px-3 py-2 rounded-lg bg-blue-600 text-white hover:scale-105 transition" 
                                    onClick={
                                        () => {
                                            window.location.href = "/revenues/quotation"
                                        }
                                    }>
                                        Create Quotation
                                </button>
                                <button className="w-full px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm">Create Sale Orders</button>
                                <button className="w-full px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm">Create Deposit</button>
                                <button className="w-full px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm">Create Reciept</button>
                                <button className="w-full px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm">Create Delivery Order</button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Top Customers */}
                        <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                            <h2 className="font-semibold text-slate-800">
                                Top Customers
                            </h2>

                            <div className="mt-4 space-y-3">
                                {topCustomers.map((customer, index) => (
                                    <div
                                        key={customer.name}
                                        className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50 transition"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                                                {index + 1}
                                            </div>
                                            <span className="text-slate-700">
                                                {customer.name}
                                            </span>
                                        </div>
                                        <span className="font-medium text-slate-800">
                                            {customer.amount}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Outstanding Revenue */}
                        <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
                            <h2 className="font-semibold text-slate-800">
                                Outstanding Revenue
                            </h2>

                            <div className="mt-6 space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">
                                        Overdue &gt; 30 days
                                    </span>
                                    <span className="font-semibold text-red-500">
                                        ฿ 320,000
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">
                                        Due this month
                                    </span>
                                    <span className="font-semibold text-amber-500">
                                        ฿ 180,000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
