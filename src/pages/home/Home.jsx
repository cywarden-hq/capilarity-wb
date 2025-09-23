import React from "react";
import OurPartners from "./features/OurPartners";
import OurTestimonials from "./features/OurTestimonials";
import Resources from "./features/Resources";
import OurServices from "./features/OurServices";
import WhyUs from "./features/WhyUs";
import ContactUs from "../../components/ContactUs";
import AboutUs from "./features/AboutUs";
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <HeroGeometric
          title1="From Visibility to Velocity"
          title2="Accelerate Your Cloud Journey"
          description="From Observability to AI-driven DevOps, we help enterprises run faster, safer, and smarter in the cloud."
        />
      </div>

      <OurPartners />
      <OurServices />
      <AboutUs />
      <WhyUs />

      {/* Resources Section */}
      <Resources />

      {/* Our Testimonials Section */}
      <OurTestimonials />

      {/* Contact Us Today Section */}
      <ContactUs />

    </>
  );
}