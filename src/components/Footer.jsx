import React from "react";
import footer_bg from "/images/footer/footer-bg.svg";
import { PiPhoneCall } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#002857] text-white py-16 relative overflow-hidden">
      {/* Background Logo */}
      <div className="hidden lg:block w-full h-full z-20 inset-0">
        <img
          src={footer_bg}
          alt=""
          className="absolute top-[92px] left-0 w-[1733px] h-[526px] object-center"
        />
      </div>

      <div className="relative z-10 px-6 lg:px-[80px] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b3c5d345ec22d2a5f1cd555442259e73dad264ef?width=388"
              alt="Capilarity"
              className="h-[68px] w-[194px]"
            />
            <p className="text-[#C3C3C3] font-inter text-base leading-[150%] max-w-[386px]">
              <span className="font-bold">Capilarity </span>
              is a project & business management firm working on projects in the software and app verticals. In other words, we manage your project & business requirement so you can focus on building your
              <span className="font-bold"> KICKASS PRODUCT. PERIOD</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {/* <img src="https://api.builder.io/api/v1/image/assets/TEMP/5ea9921d9628582704f52bc0e35b69c2c33c21e3?width=34" alt="" className="w-[17px] h-[18px]" /> */}
                <PiPhoneCall className="w-[17px] h-[18px]" />
                <span className="text-[#EBE4E4] font-inter text-[13px]">+1 925 414 0853</span>
              </div>
              <div className="flex items-center gap-3">
                {/* <img src="https://api.builder.io/api/v1/image/assets/TEMP/5ea9921d9628582704f52bc0e35b69c2c33c21e3?width=34" alt="" className="w-[17px] h-[18px]" /> */}
                <PiPhoneCall className="w-[17px] h-[18px]" />
                <span className="text-[#EBE4E4] font-inter text-[13px]">+91 8558885265</span>
              </div>
              <div className="flex items-center gap-3">
                {/* <img src="https://api.builder.io/api/v1/image/assets/TEMP/5ea9921d9628582704f52bc0e35b69c2c33c21e3?width=34" alt="" className="w-[17px] h-[18px]" /> */}
                <PiPhoneCall className="w-[17px] h-[18px]" />
                <span className="text-[#EBE4E4] font-inter text-[13px]">+1 714-280-4838</span>
              </div>
              <div className="flex items-center gap-3">
                {/* <img src="https://api.builder.io/api/v1/image/assets/TEMP/9d55d8b961e30c4bdd9d99237156632bb3475ddb?width=36" alt="" className="w-[18px] h-[18px]" /> */}
                <IoMailOutline className="w-[18px] h-[18px]" />
                <span className="text-[#F7F2F2] font-inter text-[13px]">info@capilarity.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#F5FEFF] font-inter text-[22px] font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="/about-us" className="text-[#CFCBCB] font-inter text-base hover:text-white transition-colors">About</a></li>
              <li><a href="/get-in-touch" className="text-[#CFCBCB] font-inter text-base hover:text-white transition-colors">Careers</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/company/capilarity/" className="text-[#CFCBCB] font-inter text-base hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="/insights" className="text-[#CFCBCB] font-inter text-base hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#F5FEFF] font-inter text-[22px] font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="/services/observability" className="text-[#CFCBCB] font-inter text-base hover:text-white transition-colors">Observability</a></li>
              <li><a href="/services/ai-development" className="text-[#CFCBCB] font-inter text-base hover:text-white transition-colors">AI Development</a></li>
              <li><a href="/services/security-operation-center" className="text-[#ACA7A7] font-inter text-base hover:text-white transition-colors">Managed DevOps</a></li>
              <li><a href="/services/devsecops" className="text-[#CFCBCB] font-inter text-base hover:text-white transition-colors">DevSecOps</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons and Copyright */}
        <div className="border-t border-[#F5FEFF] mt-12 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-white/66 font-inter text-base">@copyright 2025. All Rights Reserved</p>
          <div className="flex gap-2 cursor-pointer">
            {/* Social icons - using placeholder divs as the original design doesn't show specific icons */}
            <div className="w-10 h-10 rounded flex items-center justify-center">
              <img src="/images/footer/facebook.svg" />
            </div>
            <Link target="_blank" to="https://www.linkedin.com/company/capilarity/" className="w-10 h-10 rounded flex items-center justify-center">
              <img src="/images/footer/linkedin.svg" />
            </Link>
            <div className="w-10 h-10 rounded flex items-center justify-center">
              <img src="/images/footer/youtube.svg" />
            </div>
            <div className="w-10 h-10 rounded flex items-center justify-center">
              <img src="/images/footer/instagram.svg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}