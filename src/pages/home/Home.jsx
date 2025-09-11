import React from "react";
import OurPartners from "./features/OurPartners";
import OurTestimonials from "./features/OurTestimonials";
import Resources from "./features/Resources";
import OurServices from "./features/OurServices";
import ContactUs from "../../components/ContactUs";
import AboutUs from "./features/AboutUs";
import { Link } from "react-router";
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero";

export default function Home() {
  return (
    <>
      {/* <div className="min-h-screen">
        <HeroGeometric
          title1="From Visibility to Velocity"
          title2="Accelerate Your Cloud Journey"
          description="From Observability to AI-driven DevOps, we help enterprises run faster, safer, and smarter in the cloud."
        />
      </div> */}
      <div className="min-h-screen bg-[#000314] relative overflow-hidden pt-[114px]">
      {/* Hero Content */}
      <div className="relative z-20 px-6 lg:px-[94px] pt-20 lg:pt-[50px]">
          <div className="max-w-[732px]">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-regular pb-[30px] leading-tight">
              <span className="text-white">From </span>
              <span className="text-white">Visibility </span>
              <span className="text-white">to </span>
              <span className="font-semibold text-orange-500">Velocity </span>
              <span className="text-white">Accelerate Your</span><br />
              <span className="text-white">Cloud Journey.</span>
            </h1>

      {/* Subtitle */}
      <p className="font-open-sans text-lg sm:text-xl lg:text-2xl font-regular leading-[150%] text-white max-w-[646px] mb-8 lg:mb-12">
              From Observability to AI-driven DevOps, we help enterprises run faster, safer, and smarter in the cloud.
            </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:gap-10 gap-4 lg:gap-[37px] max-w-[356px]">
              <Link
                to="/get-in-touch"
                className="flex group items-center justify-center px-8 py-[8px] bg-orange-500 hover:bg-orange-400 rounded-full hover:scale-105 border-2 border-orange-500 hover:border-orange-400 transition-all duration-300 ease-out">
                <span className="text-white text-base font-bold leading-[150%] transition-colors duration-300">
                  Get Started
                </span>
              </Link>

              <button className="group flex items-center justify-center px-8 py-[8px] border-2 border-orange-500 bg-transparent rounded-full hover:border-orange-400 hover:scale-105 transition-all duration-300 ease-out">
                <span className="text-white font-inter text-[15px] font-medium leading-[150%] group-hover:text-orange-400 transition-colors duration-300">
                  See Our Work
                </span>
              </button>

            </div>
          </div>
        </div>

      {/* Hero Vector Top */}
      <div className="absolute top-0 left-0 right-0 z-10 w-full h-full overflow-hidden">
          <img
            src="/images/home/HeroVectorTop.svg"
            alt="Hero Vector Bottom"
            className="absolute top-0 left-0"
            style={{ width: '100%' }}
          />
        </div>

      {/* Hero Vector Top 2 */}
      <div className="absolute top-[40%] left-0 right-0 z-10 w-full h-full overflow-hidden">
          <img
            src="/images/home/HeroBgEffect.svg"
            alt="Hero Bg Effect"
            className="absolute top-0 left-0"
            style={{ width: '100%' }}
          />
        </div>

      {/* Hero Vector Bottom */}
      <div className="absolute bottom-0 left-[34.33px] right-0 z-10 w-full h-full overflow-hidden">
          <img
            src="/images/home/HeroVectorBottom-1.svg"
            alt="Hero Vector Bottom"
            className="absolute bottom-0 left-0 transform -rotate-[3.4deg]"
          />
        </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-full overflow-hidden">
          <img
            src="/images/home/HeroVectorBottom-2.svg"
            alt="Hero Vector Bottom 2"
            className="absolute bottom-0 left-0"
            style={{
              width: '100%',
              height: '309px',
              opacity: '1',
            }}
          />
        </div>

      {/* Scroll Indicator */}
      <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer">
            <div className="w-[37px] h-[55px] flex items-center justify-center">
              <svg width="38" height="55" viewBox="0 0 38 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9053 0C29.0327 0 37.2391 8.46139 37.2393 18.9043V36.042C37.2392 46.485 29.0327 55 18.9053 55C8.77798 54.9998 0.572328 46.4849 0.572266 36.042V18.9043C0.572412 8.4615 8.77803 0.000180615 18.9053 0ZM18.9053 4.55176C11.219 4.55194 4.98647 10.9785 4.98633 18.9043V36.042C4.98639 43.9678 11.219 50.3944 18.9053 50.3945C26.5917 50.3945 32.8242 43.9679 32.8242 36.042V18.9043C32.8241 10.9784 26.5917 4.55176 18.9053 4.55176ZM18.9053 10.6943C20.6107 10.6943 21.9609 11.8854 21.9609 13.3896V20.2217C21.9608 21.7259 20.6106 22.917 18.9053 22.917C17.2711 22.9168 15.8497 21.7258 15.8496 20.2217V13.3896C15.8496 11.9481 17.2 10.6945 18.9053 10.6943Z" fill="white" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <OurPartners />

      {/* Our Services Section */}
      <OurServices />
      <AboutUs />

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="px-6 lg:px-[63px] max-w-[1442px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-[500px] mx-auto">
            <h2 className="text-[#1F2937] font-open-sans text-4xl lg:text-[48px] font-semibold leading-[48px] mb-5">
              Why Choose Us
            </h2>
            <p className="text-[#64748B] font-open-sans text-lg leading-7">
              The trusted partner for your cloud transformation journey
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
            {/* Enterprise-Grade Expertise */}
            <div className="group flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B2C] to-[#FBB040] shadow-[0_0_40px_0_rgba(49,130,237,0.15)] mb-4 group-hover:shadow-[0_0_50px_0_rgba(49,130,237,0.25)] group-hover:scale-110 transition-all duration-300 ease-out">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                  <path d="M9.99992 15H7.49992C6.39485 15 5.33504 14.561 4.55364 13.7796C3.77224 12.9982 3.33325 11.9384 3.33325 10.8333C3.33325 9.72822 3.77224 8.66842 4.55364 7.88701C5.33504 7.10561 6.39485 6.66663 7.49992 6.66663H9.99992" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 15H32.5C33.6051 15 34.6649 14.561 35.4463 13.7796C36.2277 12.9982 36.6667 11.9384 36.6667 10.8333C36.6667 9.72822 36.2277 8.66842 35.4463 7.88701C34.6649 7.10561 33.6051 6.66663 32.5 6.66663H30" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.66675 36.6666H33.3334" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.6667 24.4333V28.3333C16.6667 29.25 15.8834 29.9667 15.0501 30.35C13.0834 31.25 11.6667 33.7333 11.6667 36.6667" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23.3333 24.4333V28.3333C23.3333 29.25 24.1166 29.9667 24.9499 30.35C26.9166 31.25 28.3333 33.7333 28.3333 36.6667" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 3.33337H10V15C10 17.6522 11.0536 20.1957 12.9289 22.0711C14.8043 23.9465 17.3478 25 20 25C22.6522 25 25.1957 23.9465 27.0711 22.0711C28.9464 20.1957 30 17.6522 30 15V3.33337Z" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[#1F2937] font-open-sans text-[19px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Enterprise-Grade Expertise
              </h3>
              <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] max-w-[313px] group-hover:text-gray-600 transition-colors duration-300">
                Proven success with Fortune 500 and highly regulated industries.
              </p>
            </div>

            {/* Faster Time-to-Value */}
            <div className="group flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B2C] to-[#FBB040] shadow-[0_0_40px_0_rgba(49,130,237,0.15)] mb-4 group-hover:shadow-[0_0_50px_0_rgba(49,130,237,0.25)] group-hover:scale-110 transition-all duration-300 ease-out">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                  <path d="M6.66649 23.3333C6.3511 23.3344 6.04188 23.246 5.77475 23.0783C5.50762 22.9106 5.29355 22.6706 5.15741 22.3861C5.02127 22.1016 4.96865 21.7843 5.00566 21.4711C5.04267 21.1579 5.16779 20.8616 5.36649 20.6167L21.8665 3.61665C21.9903 3.47379 22.1589 3.37725 22.3448 3.34287C22.5307 3.3085 22.7227 3.33834 22.8894 3.42749C23.0561 3.51665 23.1875 3.65981 23.262 3.8335C23.3366 4.00719 23.35 4.20107 23.2998 4.38332L20.0998 14.4167C20.0055 14.6692 19.9738 14.9409 20.0075 15.2083C20.0412 15.4758 20.1393 15.7311 20.2933 15.9524C20.4474 16.1736 20.6528 16.3542 20.8919 16.4786C21.1311 16.603 21.3969 16.6675 21.6665 16.6667H33.3332C33.6485 16.6656 33.9578 16.754 34.2249 16.9217C34.492 17.0894 34.7061 17.3294 34.8422 17.6139C34.9784 17.8984 35.031 18.2157 34.994 18.5289C34.957 18.8421 34.8319 19.1384 34.6332 19.3833L18.1332 36.3833C18.0094 36.5262 17.8407 36.6227 17.6549 36.6571C17.469 36.6915 17.277 36.6616 17.1103 36.5725C16.9436 36.4833 16.8122 36.3402 16.7376 36.1665C16.663 35.9928 16.6497 35.7989 16.6998 35.6167L19.8998 25.5833C19.9942 25.3308 20.0259 25.0591 19.9922 24.7916C19.9585 24.5242 19.8604 24.2689 19.7063 24.0476C19.5523 23.8264 19.3469 23.6458 19.1077 23.5214C18.8685 23.397 18.6027 23.3324 18.3332 23.3333H6.66649Z" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[#1F2937] font-open-sans text-[19px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Faster Time-to-Value
              </h3>
              <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] max-w-[296px] group-hover:text-gray-600 transition-colors duration-300">
                Accelerated cloud transformations without sacrificing quality or security.
              </p>
            </div>

            {/* Partnership-First Approach */}
            <div className="group flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B2C] to-[#FBB040] shadow-[0_0_40px_0_rgba(49,130,237,0.15)] mb-4 group-hover:shadow-[0_0_50px_0_rgba(49,130,237,0.25)] group-hover:scale-110 transition-all duration-300 ease-out">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                  <path d="M26.6668 35V31.6667C26.6668 29.8986 25.9645 28.2029 24.7142 26.9526C23.464 25.7024 21.7683 25 20.0002 25H10.0002C8.23205 25 6.53636 25.7024 5.28612 26.9526C4.03588 28.2029 3.3335 29.8986 3.3335 31.6667V35" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.0002 18.3333C18.6821 18.3333 21.6668 15.3486 21.6668 11.6667C21.6668 7.98477 18.6821 5 15.0002 5C11.3183 5 8.3335 7.98477 8.3335 11.6667C8.3335 15.3486 11.3183 18.3333 15.0002 18.3333Z" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M36.6665 35V31.6667C36.6654 30.1896 36.1738 28.7546 35.2688 27.5872C34.3638 26.4198 33.0967 25.586 31.6665 25.2167" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M26.6665 5.21667C28.1005 5.58384 29.3716 6.41784 30.2792 7.58719C31.1869 8.75654 31.6796 10.1947 31.6796 11.675C31.6796 13.1553 31.1869 14.5935 30.2792 15.7628C29.3716 16.9322 28.1005 17.7662 26.6665 18.1333" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[#1F2937] font-open-sans text-[19px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Partnership-First Approach
              </h3>
              <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] max-w-[273px] group-hover:text-gray-600 transition-colors duration-300">
                We embed with your team, upskill your people, and leave lasting impact.
              </p>
            </div>

            {/* Innovation at Scale */}
            <div className="group flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B2C] to-[#FBB040] shadow-[0_0_40px_0_rgba(49,130,237,0.15)] mb-4 group-hover:shadow-[0_0_50px_0_rgba(49,130,237,0.25)] group-hover:scale-110 transition-all duration-300 ease-out">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                  <path d="M7.49984 27.5C4.99984 29.6 4.1665 35.8334 4.1665 35.8334C4.1665 35.8334 10.3998 35 12.4998 32.5C13.6832 31.1 13.6665 28.95 12.3498 27.65C11.702 27.0317 10.8487 26.6744 9.95355 26.6468C9.05844 26.6191 8.18463 26.9229 7.49984 27.5Z" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 25L15 20C15.8869 17.699 17.0037 15.4934 18.3333 13.4166C20.2753 10.3116 22.9794 7.75505 26.1883 5.99012C29.3973 4.22519 33.0044 3.31058 36.6667 3.3333C36.6667 7.86663 35.3667 15.8333 26.6667 21.6666C24.5615 22.9978 22.3281 24.1145 20 25Z" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.9998 20H6.6665C6.6665 20 7.58317 14.95 9.99984 13.3333C12.6998 11.5333 18.3332 13.3333 18.3332 13.3333" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 25V33.3333C20 33.3333 25.05 32.4166 26.6667 30C28.4667 27.3 26.6667 21.6666 26.6667 21.6666" stroke="#FAFAFA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[#1F2937] font-open-sans text-[20px] font-bold leading-7 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Innovation at Scale
              </h3>
              <p className="text-[#64748B] font-open-sans text-[15px] font-normal leading-[26px] max-w-[295px] group-hover:text-gray-600 transition-colors duration-300">
                From AI-driven workflows to automated observability, we future-proof your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <Resources />

      {/* Our Testimonials Section */}
      <OurTestimonials />

      {/* Contact Us Today Section */}
      <ContactUs />

    </>
  );
}