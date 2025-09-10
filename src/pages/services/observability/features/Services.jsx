import React from 'react'

export default function Services() {
    return (
        <>
            <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
                <div className="flex flex-col gap-20">

                    <div className="flex gap-20 items-center">
                        <img src="/images/observability/service1.svg" alt="Service 1" />
                        <div className="flex flex-col gap-10 pr-20">
                            <h1 className="text-5xl font-bold text-[#1F2937]">Application Performance Monitoring APM</h1>
                            <div className="flex flex-col gap-5 text-[#64748B]">
                                <span className="text-lg font-normal leading-relaxed">We provide end to end monitoring of applications, databases, and supporting infrastructure, helping you with automated detection of anomalies and performance bottlenecks.</span>
                                <span className="text-lg font-normal leading-relaxed">Our services come with 24 x 7 monitoring and operations teams that assist you in keeping your system up and running all the time, anytime and anywhere.</span>
                                <span className="text-lg font-normal leading-relaxed">Capillary’s APM observability services let you and your customers have a smoother user experience, continuous performance optimizations ensure stable and scalable application delivery.</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-20 items-center">
                        <div className="flex flex-col gap-10 pl-20">
                            <h1 className="text-5xl font-bold text-[#1F2937]">Real User Monitoring RUM </h1>
                            <div className="flex flex-col gap-5 text-[#64748B]">
                                <span className="text-lg font-normal leading-relaxed">Capilarity provides you the root cause analysis of errors with detailed insights on affected pages, browsers, and users—so you can fix issues faster and keep your website performing at its best. 
                                We help you with faster detection and resolution of errors that affect the user experience of customers.</span>
                                <span className="text-lg font-normal leading-relaxed">Get an in-depth understanding about how your website is really performing, how the users are interacting with your website and application. Track user journeys, analyze performance, and uncover data-driven insights to optimize digital experiences and keep customers engaged.</span>
                                <span className="text-lg font-normal leading-relaxed">We provide you real time insights for your website and help you track website’s performance and user experience with key metrics like response time, page load, and throughput.</span>
                            </div>
                        </div>
                        <img src="/images/observability/service2.svg" alt="Service 2" />
                    </div>

                    <div className="flex gap-20 items-center">
                        <img src="/images/observability/service3.svg" alt="Service 3" />
                        <div className="flex flex-col gap-10 pr-20">
                            <h1 className="text-5xl font-bold text-[#1F2937]">Infrastructure Monitoring</h1>
                            <div className="flex flex-col gap-5 text-[#64748B]">
                                <span className="text-lg font-normal leading-relaxed">Real-time visibility across cloud, containers, serverless, and on-prem environments—without delays or blind spots in your infrastructure.</span>
                                <span className="text-lg font-normal leading-relaxed">Cross-stack correlation of logs, metrics, and traces to detect and resolve issues faster with automated root cause detection, help you keep running your services all the time.</span>
                                <span className="text-lg font-normal leading-relaxed">Manage the health and performance of your infrastructure with Capilarity’s infrastructure monitoring services. Gain full visibility into server resources, map dependencies across systems, and track database performance for your applications across cloud platforms.</span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )
}