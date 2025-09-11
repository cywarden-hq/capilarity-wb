import React from 'react'

export default function Analytics() {
    return (
        <>
            <section className="relative min-h-[400px] lg:min-h-[600px]">
                <div className="absolute inset-0 z-20">
                    <img className="w-full h-full object-cover z-10" src="/images/observability/log_analytics.svg" alt="Log Analytics" />
                    <div className="absolute inset-0 bg-black/60 z-20"></div>
                </div>
                <div className="absolute top-4 sm:top-6 lg:top-10 w-full h-full flex flex-col gap-4 sm:gap-6 lg:gap-10 z-30 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium lg:font-bold text-white text-center leading-tight lg:leading-normal">Log Analytics</h1>
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-8 text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed lg:leading-relaxed max-w-4xl mx-auto">
                        <p>Stream, parse, and enrich logs in real time with no indexing delays or wasted storage. This means lower costs, faster access to insights, and the ability to act immediately on live data.</p>
                        <p>Use machine learning to reduce noise and automatically group billions of logs into clear patterns. Critical anomalies surface instantly, so your teams can focus on resolving issues instead of sifting through clutter.</p>
                        <p>Enrich logs with geolocation, threat intelligence, and business metadata to deliver actionable insights at scale. Every log is transformed into context-rich data, giving you a complete picture for faster and smarter decisions.</p>
                    </div>
                </div>
            </section>
        </>
    )
}