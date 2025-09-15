import React, { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import GetInTouch from './pages/GetInTouch'
import Observability from './pages/services/observability/Observability'
import Soc from './pages/services/soc/Soc'
import NotFound from './pages/NotFound'

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative">
      <Navbar />
      <main className="relative z-10">
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

        <Route path="services">
          <Route path="observability" element={<Observability />} />
          <Route path="security-operation-center" element={<Soc />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
