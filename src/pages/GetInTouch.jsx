import React, { useState } from "react";
import Reveal from "../components/Reveal";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    businessEmail: "",
    message: "",
    servicesOfInterest: [],
    platformsOfInterest: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (category, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#002857] p-3 pt-25 lg:p-20 lg:pt-40 overflow-hidden">
      <Reveal animation="slideUp" duration="fast" delay={100}>
        <div className="bg-orange-50 rounded-2xl">
          {/* Main Content */}
          <div className="px-3 lg:px-[66px] py-5 lg:py-[56px]">
            <div className="max-w-[1360px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Contact Form */}
                <div className="order-2 lg:order-1">
                  <Reveal animation="slideUp" duration="fast" delay={200}>
                  <div className="bg-white border border-gray-200/50 rounded-[22px] p-8 lg:p-12 max-w-[564px]">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#0B2D4C] font-open-sans text-[15px] font-normal mb-2">
                            First Name*
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-[14px] border border-[#CECECE] rounded-[10px] font-open-sans text-[13px] text-gray-600 placeholder:text-gray-400 focus:border-orange-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-[#0B2D4C] font-open-sans text-[15px] font-normal mb-2">
                            Last Name*
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-[14px] border border-[#CECECE] rounded-[10px] font-open-sans text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-capilarity-button-blue"
                            required
                          />
                        </div>
                      </div>

                      {/* Company and Job Title */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#0B2D4C] font-open-sans text-base font-normal mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-3 py-[14px] border border-[#CECECE] rounded-[10px] font-open-sans text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-capilarity-button-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-[#0B2D4C] font-open-sans text-base font-normal mb-2">
                            Job Title
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Title"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className="w-full px-3 py-[14px] border border-[#CECECE] rounded-[10px] font-open-sans text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-capilarity-button-blue"
                          />
                        </div>
                      </div>

                      {/* Business Email */}
                      <div>
                        <label className="block text-[#0B2D4C] font-open-sans text-[15px] font-normal mb-2">
                          Business Email*
                        </label>
                        <input
                          type="email"
                          name="businessEmail"
                          placeholder="example@company.io"
                          value={formData.businessEmail}
                          onChange={handleInputChange}
                          className="w-full px-3 py-[14px] border border-[#CECECE] rounded-[10px] font-open-sans text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-capilarity-button-blue"
                          required
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[#0B2D4C] font-open-sans text-base font-normal mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-3 py-[18px] border border-[#CECECE] rounded-[10px] font-open-sans text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-capilarity-button-blue resize-none"
                        />
                      </div>

                      {/* Services and Platforms Checkboxes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Services of Interest */}
                        <div>
                          <label className="block text-[#0B2D4C] font-open-sans text-[15px] font-normal mb-4">
                            Services of Interest
                          </label>
                          <div className="space-y-3">
                            {['Observability', 'Dev Ops', 'Dev Sec Ops', 'APM', 'SOC', 'NOC', 'AI Development'].map((service) => (
                              <label key={service} className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={formData.servicesOfInterest.includes(service)}
                                  onChange={() => handleCheckboxChange('servicesOfInterest', service)}
                                  className="w-[18px] h-[18px] border border-[#CECECE] rounded-[5px] hover:border-orange-500 checked:bg-orange-500 checked:border-orange-500 focus:ring-orange-500 focus:ring-2 focus:ring-offset-0 appearance-none cursor-pointer transition-all duration-200 relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                                />
                                <span className="text-[#0B2D4C] font-open-sans text-base font-normal">
                                  {service}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Platforms of Interest */}
                        <div>
                          <label className="block text-[#0B2D4C] font-open-sans text-[15px] font-normal mb-4">
                            Platforms of Interest
                          </label>
                          <div className="space-y-3">
                            {['Datadog', 'ServiceNow', 'Grafana', 'DynaTrace', 'Cribl'].map((platform) => (
                              <label key={platform} className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={formData.platformsOfInterest.includes(platform)}
                                  onChange={() => handleCheckboxChange('platformsOfInterest', platform)}
                                  className="w-[18px] h-[18px] border border-[#CECECE] rounded-[5px] hover:border-orange-500 checked:bg-orange-500 checked:border-orange-500 focus:ring-orange-500 focus:ring-2 focus:ring-offset-0 appearance-none cursor-pointer transition-all duration-200 relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                                />
                                <span className="text-[#0B2D4C] font-open-sans text-base font-normal">
                                  {platform}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="bg-[#FBB040] border border-[#FBB040] text-[#1E1E1E] font-open-sans text-[15px] font-bold leading-4 tracking-[1.25px] uppercase px-6 py-4 rounded-[50px] hover:bg-[#e49e39] transition-colors"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  </Reveal>
                </div>

                {/* Right Content */}
                <div className="order-1 lg:order-2 space-y-8">
                  <Reveal animation="slideRight" duration="fast" delay={300}>
                    {/* Header */}
                    <div className="space-y-4">
                      <h1 className="text-gray-700 max-md:text-center font-open-sans text-[30px] lg:text-[41px] font-normal leading-[58px]">
                        Get in touch
                      </h1>
                      <p className="text-gray-400 font-open-sans text-[15px] mb-5 lg:text-[21px] font-light leading-[25px] lg:leading-[40px] max-w-[687px]">
                        Capilarity is a project & business management firm working on projects in the software and app verticals. In other words, we manage your project & business requirement so you can focus on building your KICKASS PRODUCT. PERIOD
                      </p>
                    </div>

                    {/* Trusted by section */}
                    <div className="space-y-6">
                      <p className="text-gray-700 font-open-sans text-[15px] lg:text-[21px] font-normal leading-[25px] lg:leading-[40px] text-center">
                        Trusted by leading enterprises across finance, SaaS, healthcare, and technology.
                      </p>

                      {/* Client Logos Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
                        <img
                          src="images/home/partners/image-4.svg"
                          alt="Palo Alto Networks"
                          className="h-[86px] w-[151px] object-contain"
                        />
                        <img
                          src="images/home/partners/image-3.svg"
                          alt="Cisco"
                          className="h-[69px] w-[150px] object-contain"
                        />
                        <img
                          src="images/home/partners/image-6.svg"
                          alt="CyberArk"
                          className="h-[140px] w-[248px] object-contain lg:col-span-1"
                        />
                        <img
                          src="images/home/partners/image-1.svg"
                          alt="Elastic"
                          className="h-[95px] w-[168px] object-contain"
                        />
                        <img
                          src="images/home/partners/image-2.svg"
                          alt="AWS"
                          className="h-[79px] w-[140px] object-contain"
                        />
                        <img
                          src="images/home/partners/image-5.svg"
                          alt="Check Point"
                          className="h-[117px] w-[207px] object-contain"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div >
  );
}