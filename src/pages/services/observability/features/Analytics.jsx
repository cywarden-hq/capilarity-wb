import React from 'react'

export default function Analytics() {
    return (
        <>
            <section className="relative">
                <div className="relative z-20">
                    <img className="w-full z-10" src="/images/observability/log_analytics.svg" />
                    <div className="absolute inset-0 bg-black/60 z-20"></div>
                </div>
                <div className="absolute top-10 w-full h-full flex flex-col gap-10 z-30">
                    <h1 className="text-5xl font-bold text-white text-center">Log Analytics</h1>
                    <div className="flex flex-col gap-8 text-gray-100 text-xl font-light leading-relaxed pt-7 p-20">
                        <span>Stream, parse, and enrich logs in real time with no indexing delays or wasted storage. This means lower costs, faster access to insights, and the ability to act immediately on live data.</span>
                        <span>Use machine learning to reduce noise and automatically group billions of logs into clear patterns. Critical anomalies surface instantly, so your teams can focus on resolving issues instead of sifting through clutter.</span>
                        <span>Enrich logs with geolocation, threat intelligence, and business metadata to deliver actionable insights at scale. Every log is transformed into context-rich data, giving you a complete picture for faster and smarter decisions.</span>
                    </div>
                </div>
            </section>
        </>
    )
}