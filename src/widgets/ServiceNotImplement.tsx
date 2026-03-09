import React from 'react'

export const ServiceNotImplement: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="absolute -top-12 -right-10 h-40 w-40 rounded-full bg-amber-100/70 blur-2xl" />
      <div className="absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-sky-100/70 blur-2xl" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M4.93 19h14.14a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.2 16a2 2 0 001.73 3z" />
          </svg>
        </div>

        <h2 className="text-xl font-semibold text-slate-800">Service Not Implemented</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-500">
          This service is not available yet. Please check back later or contact the development team for timeline details.
        </p>

        <div className="mt-6 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-medium tracking-wide text-slate-600">
          Status: In Development
        </div>
      </div>
    </section>
  )
}
