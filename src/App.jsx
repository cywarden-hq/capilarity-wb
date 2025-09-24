import React, { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import GetInTouch from "./pages/GetInTouch";
import Observability from "./pages/services/observability/Observability";
import Soc from "./pages/services/soc/Soc";
import Devsecops from "./pages/services/devsecops/Devsecops";
import NotFound from "./pages/NotFound";
import WhyUs from "./pages/why-us/index.jsx";
import Aboutus from './pages/aboutus/Aboutus'
import AiDevelopment from './pages/services/ai/AiDevelopment'
import Partner from './pages/partner/Partner'
import Insights from './pages/insights/Insights'

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="relative z-10 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="get-in-touch" element={<GetInTouch />} />
        <Route path="about-us" element={<Aboutus />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="partner" element={<Partner />} />
        <Route path="insights" element={<Insights />} />
        
        <Route path="services">
          <Route path="observability" element={<Observability />} />
          <Route path="ai-development" element={<AiDevelopment />} />
          <Route path="security-operation-center" element={<Soc />} />
          <Route path="devsecops" element={<Devsecops />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
