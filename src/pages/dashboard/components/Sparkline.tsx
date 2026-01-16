import React from 'react'

export const Sparkline: React.FC<{ points?: number[] }> = ({ points = [4, 8, 6, 10, 7, 12, 9] }) => {
    const width = 120, height = 36;
    const max = Math.max(...points);
    const step = width / (points.length - 1);
    const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${height - (p / max) * height}`).join(" ");
    return <>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="opacity-90">
            <path d={d} fill="none" stroke="rgba(59,130,246,0.9)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </>
}
