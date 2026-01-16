import React from 'react'
import { ShareNav } from '../../share/nav/Nav'
import { FooterClock } from '../../share/FooterClock';

// import components
import { GlassCard } from '../../share/GlassCard';
import { KPI } from './components/KPI';
import { Sparkline } from './components/Sparkline';

/**
 * Dashboard page (MRP)
 * Single-file with small sub-components to copy-paste quickly.
 * Uses Tailwind CSS classes (assumes Tailwind is configured).
 */

/* ---------- Mock data ---------- */
const kpis = [
  { title: "Total Stock Value", value: "฿1,254,320", delta: "+3.4%" },
  { title: "Open Purchase Orders", value: "18", delta: "-1" },
  { title: "Material Shortages", value: "6", delta: "+2" },
  { title: "Pending Production Orders", value: "12", delta: "-4" },
];

const lowStockItems = [
  { id: "MAT-001", name: "Steel Coil A", stock: 12, uom: "pcs", rrp: 50 },
  { id: "MAT-012", name: "Plastic Pellet B", stock: 5, uom: "kg", rrp: 30 },
  { id: "MAT-103", name: "Screw M4", stock: 20, uom: "box", rrp: 100 },
];

const recentActions = [
  { time: "09:24", text: "PO #456 issued to Supplier ABC" },
  { time: "08:10", text: "MRP run completed (today)" },
  { time: "Yesterday", text: "Material 'Steel Coil A' marked low stock" },
];


export const DashboardPage: React.FC = () => {
  return <>
    <ShareNav />
    <div className="bg-gradient-to-br from-gray-100 to-gray-100 p-6 md:p-10">
      {/* top spacing because navbar is fixed */}
      <div className="pt-16 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">MRP Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Overview of materials, planning and recent activities</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow hover:scale-105 transition">Run MRP</button>
            <button className="px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm hover:bg-white/60 transition">Export</button>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpis.map((k) => (
            <GlassCard key={k.title} className="p-4">
              <div className="flex items-center justify-between">
                <KPI title={k.title} value={k.value} delta={k.delta} />
                <Sparkline />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Main grid: left big, right column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Stock table / shortage */}
          <div className="lg:col-span-2 space-y-6">
            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Material Shortages & Low Stock</h2>
                <div className="text-sm text-gray-600">Updated: Today</div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left">
                  <thead className="text-sm text-gray-500">
                    <tr>
                      <th className="py-2 pr-4">Material ID</th>
                      <th className="py-2 pr-4">Name</th>
                      <th className="py-2 pr-4">Stock</th>
                      <th className="py-2 pr-4">UOM</th>
                      <th className="py-2 pr-4">Reorder Point</th>
                      <th className="py-2 pr-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {lowStockItems.map((it) => (
                      <tr key={it.id} className="border-t border-white/20">
                        <td className="py-3 pr-4 font-medium">{it.id}</td>
                        <td className="py-3 pr-4">{it.name}</td>
                        <td className="py-3 pr-4">{it.stock}</td>
                        <td className="py-3 pr-4">{it.uom}</td>
                        <td className="py-3 pr-4">{it.rrp}</td>
                        <td className="py-3 pr-4">
                          <div className="flex gap-2">
                            <button className="px-3 py-1 rounded-md bg-yellow-400/90 text-white text-sm hover:brightness-95 transition">Create PR</button>
                            <button className="px-3 py-1 rounded-md bg-white/30 backdrop-blur-sm text-sm hover:bg-white/50 transition">View</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Capacity Utilization (This Week)</h3>
                <div className="text-sm text-gray-600">Machine uptime: 82%</div>
              </div>
              {/* Placeholder big chart */}
              <div className="h-44 rounded-lg bg-white/20 flex items-center justify-center text-gray-600">
                {/* place for chart library (recharts / chart.js) later */}
                <div className="text-center">
                  <div className="text-sm mb-2">Production Output</div>
                  <svg width={300} height={120} viewBox="0 0 300 120">
                    <rect x="0" y="0" width="300" height="120" rx="8" fill="rgba(255,255,255,0.06)" />
                    <text x="150" y="60" textAnchor="middle" fill="rgba(255,255,255,0.6)">Chart placeholder</text>
                  </svg>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right column: actions / recent */}
          <div className="space-y-6">
            <GlassCard>
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                <button className="w-full px-3 py-2 rounded-lg bg-blue-600 text-white hover:scale-105 transition">Run Full MRP</button>
                <button className="w-full px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm">Create Purchase Order</button>
                <button className="w-full px-3 py-2 rounded-lg bg-white/40 backdrop-blur-sm">Create Production Order</button>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold mb-3">Recent Activity</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                {recentActions.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-10 text-xs text-gray-500">{r.time}</div>
                    <div className="flex-1">{r.text}</div>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold mb-3">Alerts</h3>
              <div className="text-sm text-red-500">• 6 items below safety stock</div>
              <div className="text-sm text-yellow-600 mt-2">• 2 overdue purchase orders</div>
            </GlassCard>
          </div>
        </div>

        {/* Footer note */}
        <FooterClock />
      </div>
    </div>
  </>
}
