import React from "react";
import { Link } from "react-router";

const OurServices = () => {
    const services = [
        {
            id: 1,
            title: "Observability",
            description: "End-to-end visibility into apps, infra, and user experience with Datadog, OpenTelemetry, and AI-driven insights.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.3334 16H26.0267C25.444 15.9988 24.877 16.1884 24.4122 16.54C23.9475 16.8915 23.6107 17.3856 23.4534 17.9467L20.3201 29.0934C20.2999 29.1626 20.2578 29.2234 20.2001 29.2667C20.1424 29.31 20.0722 29.3334 20.0001 29.3334C19.928 29.3334 19.8578 29.31 19.8001 29.2667C19.7424 29.2234 19.7003 29.1626 19.6801 29.0934L12.3201 2.90669C12.2999 2.83745 12.2578 2.77663 12.2001 2.73335C12.1424 2.69008 12.0722 2.66669 12.0001 2.66669C11.928 2.66669 11.8578 2.69008 11.8001 2.73335C11.7424 2.77663 11.7003 2.83745 11.6801 2.90669L8.54675 14.0534C8.39003 14.6122 8.05526 15.1047 7.59323 15.456C7.13121 15.8074 6.56717 15.9984 5.98675 16H2.66675" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 2,
            title: "AI Development",
            description: "Custom AI/ML models, intelligent agents, and workflow automation built to scale in enterprise environments.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9999 6.66669C16.0015 6.1334 15.8964 5.60518 15.6909 5.11309C15.4853 4.62101 15.1834 4.17499 14.803 3.80129C14.4225 3.42758 13.9712 3.13372 13.4755 2.937C12.9798 2.74028 12.4498 2.64466 11.9166 2.65578C11.3834 2.66689 10.8578 2.78451 10.3708 3.00171C9.88373 3.21892 9.44502 3.53133 9.08047 3.92057C8.71592 4.3098 8.43288 4.76801 8.248 5.26823C8.06313 5.76845 7.98014 6.3006 8.00394 6.83336C7.2202 7.03488 6.49261 7.41209 5.87624 7.93644C5.25988 8.46079 4.77092 9.11852 4.44639 9.85982C4.12187 10.6011 3.97028 11.4066 4.00312 12.2151C4.03596 13.0237 4.25236 13.8142 4.63594 14.5267C3.96151 15.0746 3.43117 15.779 3.09106 16.5786C2.75094 17.3782 2.61135 18.2488 2.68442 19.1147C2.7575 19.9805 3.04103 20.8154 3.51034 21.5467C3.97966 22.278 4.62055 22.8836 5.37727 23.3107C5.28383 24.0337 5.33959 24.7681 5.54112 25.4687C5.74265 26.1693 6.08566 26.8211 6.54898 27.384C7.0123 27.9468 7.58608 28.4087 8.2349 28.741C8.88371 29.0734 9.59377 29.2693 10.3212 29.3165C11.0487 29.3637 11.7781 29.2613 12.4645 29.0155C13.1508 28.7698 13.7794 28.3859 14.3116 27.8877C14.8438 27.3895 15.2682 26.7874 15.5586 26.1188C15.8489 25.4501 15.9992 24.729 15.9999 24V6.66669Z" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 6.66669C15.9984 6.1334 16.1035 5.60518 16.3091 5.11309C16.5147 4.62101 16.8165 4.17499 17.197 3.80129C17.5774 3.42758 18.0288 3.13372 18.5245 2.937C19.0202 2.74028 19.5502 2.64466 20.0834 2.65578C20.6165 2.66689 21.1421 2.78451 21.6292 3.00171C22.1162 3.21892 22.5549 3.53133 22.9195 3.92057C23.284 4.3098 23.5671 4.76801 23.752 5.26823C23.9368 5.76845 24.0198 6.3006 23.996 6.83336C24.7797 7.03488 25.5073 7.41209 26.1237 7.93644C26.7401 8.46079 27.229 9.11852 27.5536 9.85982C27.8781 10.6011 28.0297 11.4066 27.9968 12.2151C27.964 13.0237 27.7476 13.8142 27.364 14.5267C28.0384 15.0746 28.5688 15.779 28.9089 16.5786C29.249 17.3782 29.3886 18.2488 29.3155 19.1147C29.2425 19.9805 28.9589 20.8154 28.4896 21.5467C28.0203 22.278 27.3794 22.8836 26.6227 23.3107C26.7161 24.0337 26.6604 24.7681 26.4588 25.4687C26.2573 26.1693 25.9143 26.8211 25.451 27.384C24.9877 27.9468 24.4139 28.4087 23.7651 28.741C23.1162 29.0734 22.4062 29.2693 21.6787 29.3165C20.9512 29.3637 20.2218 29.2613 19.5355 29.0155C18.8492 28.7698 18.2205 28.3859 17.6883 27.8877C17.1562 27.3895 16.7318 26.7874 16.4414 26.1188C16.151 25.4501 16.0008 24.729 16 24V6.66669Z" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 17.3333C18.8806 16.9395 17.9031 16.2227 17.1911 15.2733C16.4791 14.324 16.0646 13.1849 16 12C15.9354 13.1849 15.5209 14.324 14.8089 15.2733C14.0969 16.2227 13.1194 16.9395 12 17.3333" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.4653 8.66665C23.788 8.10743 23.9706 7.4784 23.9973 6.83331" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.00391 6.83331C8.03027 7.47829 8.21234 8.10731 8.53457 8.66665" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.63623 14.528C4.88015 14.3293 5.14117 14.1527 5.41623 14" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.584 14C26.859 14.1527 27.1201 14.3293 27.364 14.528" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.00011 24C7.08121 24.0004 6.1778 23.7634 5.37744 23.312" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.6227 23.312C25.8223 23.7634 24.9189 24.0004 24 24" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Managed DevOps",
            description: "Cloud-native engineering, CI/CD pipelines, Kubernetes, and platform engineering as a managed service.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2.66669L20 6.66669L16 10.6667L12 6.66669L16 2.66669Z" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.66675 12L10.6667 16L6.66675 20L2.66675 16L6.66675 12Z" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25.3334 12L29.3334 16L25.3334 20L21.3334 16L25.3334 12Z" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 21.3333L20 25.3333L16 29.3333L12 25.3333L16 21.3333Z" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.6667 16L16 16" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 10.6667L16 16" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.3334 16L16 16" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 21.3333L16 16" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 4,
            title: "DevSecOps",
            description: "Secure your software supply chain with proactive vulnerability detection, compliance automation, and zero-trust practices.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.6668 17.3333C26.6668 23.9999 22.0002 27.3333 16.4535 29.2666C16.163 29.365 15.8475 29.3603 15.5602 29.2533C10.0002 27.3333 5.3335 23.9999 5.3335 17.3333V7.99995C5.3335 7.64633 5.47397 7.30719 5.72402 7.05714C5.97407 6.80709 6.31321 6.66662 6.66683 6.66662C9.3335 6.66662 12.6668 5.06662 14.9868 3.03995C15.2693 2.79861 15.6286 2.66602 16.0002 2.66602C16.3717 2.66602 16.731 2.79861 17.0135 3.03995C19.3468 5.07995 22.6668 6.66662 25.3335 6.66662C25.6871 6.66662 26.0263 6.80709 26.2763 7.05714C26.5264 7.30719 26.6668 7.64633 26.6668 7.99995V17.3333Z" stroke="#FE8032" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-[#F6FAFF] py-16 lg:py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/067658a9d6b51795310c16fa0b86e2fa99b6f064?width=1938"
                    alt=""
                    className="absolute top-[21px] left-1/2 transform -translate-x-1/2 w-[969px] h-[1045px] opacity-64 object-cover"
                />
            </div>

            <div className="relative z-10 px-6 lg:px-[102px] max-w-[1447px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[#2C2C2C] font-open-sans text-4xl lg:text-[48px] font-semibold leading-normal tracking-[-0.96px] mb-4">
                        <span className="text-[#2C2C2C]">Our </span>
                        <span className="text-black">Services</span>
                    </h2>
                    <p className="text-black/53 font-open-sans text-lg lg:text-2xl font-normal leading-[150%] max-w-[888px] mx-auto">
                        Comprehensive cloud transformation solutions designed for enterprise success
                    </p>
                </div>

                {/* Services Grid */}
                <div className="relative max-w-[1302px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Observability Card */}
                        <Link to="/services/observability">
                            <div className="group bg-white border border-[#E2E8F0] rounded-xl shadow-[0_2px_8px_-2px_rgba(254,128,50,0.10)] p-8 h-[338px] flex flex-col hover:shadow-[0_8px_25px_-5px_rgba(254,128,50,0.15)] hover:animate-scale-pop hover:border-orange-200 transition-all duration-300 ease-out cursor-pointer">
                                <div className="flex items-center justify-center bg-orange-50 w-16 h-16 rounded-xl mb-6 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300 ease-out">
                                    <div className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                                        {services[0].icon}
                                    </div>
                                </div>
                                <h3 className="text-[#1F2937] font-open-sans text-[19px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                    {services[0].title}
                                </h3>
                                <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] mb-6 flex-grow group-hover:text-gray-600 transition-colors duration-300">
                                    {services[0].description}
                                </p>
                                <button className="group/btn text-[#FE8032] font-inter text-[13px] font-normal leading-5 text-left hover:text-orange-500 hover:translate-x-1 transition-all duration-300 ease-out cursor-pointer">
                                    <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300 ease-out">Learn More</span>
                                </button>
                            </div>
                        </Link>

                        {/* AI Development Card */}
                        <Link to="/services/ai-development">
                            <div className="group bg-white border border-[#E2E8F0] rounded-xl shadow-[0_2px_8px_-2px_rgba(254,128,50,0.10)] p-8 h-[338px] flex flex-col hover:shadow-[0_8px_25px_-5px_rgba(254,128,50,0.15)] hover:animate-scale-pop hover:border-orange-200 transition-all duration-300 ease-out cursor-pointer">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-orange-50 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300 ease-out">
                                    <div className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                                        {services[1].icon}
                                    </div>
                                </div>
                                <h3 className="text-[#1F2937] font-open-sans text-[19px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                    {services[1].title}
                                </h3>
                                <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] mb-6 flex-grow group-hover:text-gray-600 transition-colors duration-300">
                                    {services[1].description}
                                </p>
                                <button className="group/btn text-[#FE8032] font-inter text-[13px] font-normal leading-5 text-left hover:text-orange-500 hover:translate-x-1 transition-all duration-300 ease-out cursor-pointer">
                                    <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300 ease-out">Learn More</span>
                                </button>
                            </div>
                        </Link>


                        {/* Managed DevOps Card */}
                        <Link to="/services/managed-devops">
                            <div className="group bg-white border border-[#E2E8F0] rounded-xl shadow-[0_2px_8px_-2px_rgba(254,128,50,0.10)] p-8 h-[338px] flex flex-col hover:shadow-[0_8px_25px_-5px_rgba(254,128,50,0.15)] hover:animate-scale-pop hover:border-orange-200 transition-all duration-300 ease-out cursor-pointer">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-orange-50 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300 ease-out">
                                    <div className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                                        {services[2].icon}
                                    </div>
                                </div>
                                <h3 className="text-[#1F2937] font-open-sans text-[19px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                    {services[2].title}
                                </h3>
                                <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] mb-6 flex-grow group-hover:text-gray-600 transition-colors duration-300">
                                    {services[2].description}
                                </p>
                                <button className="group/btn text-[#FE8032] font-inter text-[13px] font-normal leading-5 text-left hover:text-orange-500 hover:translate-x-1 transition-all duration-300 ease-out cursor-pointer">
                                    <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300 ease-out">Learn More</span>
                                </button>
                            </div>
                        </Link>

                        {/* DevSecOps Card */}
                        <Link to="/services/devsecops">
                            <div className="group bg-white border border-[#E2E8F0] rounded-xl shadow-[0_2px_8px_-2px_rgba(254,128,50,0.10)] p-8 h-[338px] flex flex-col hover:shadow-[0_8px_25px_-5px_rgba(254,128,50,0.15)] hover:animate-scale-pop hover:border-orange-200 transition-all duration-300 ease-out cursor-pointer">
                                <div className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-orange-50 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300 ease-out">
                                    <div className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                                        {services[3].icon}
                                    </div>
                                </div>
                                <h3 className="text-[#1F2937] font-open-sans text-[19px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                                    {services[3].title}
                                </h3>
                                <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] mb-6 flex-grow group-hover:text-gray-600 transition-colors duration-300">
                                    {services[3].description}
                                </p>
                                <button className="group/btn text-[#FE8032] font-inter text-[13px] font-normal leading-5 text-left hover:text-orange-500 hover:translate-x-1 transition-all duration-300 ease-out cursor-pointer">
                                    <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-300 ease-out">Learn More</span>
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
