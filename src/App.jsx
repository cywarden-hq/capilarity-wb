import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import GetInTouch from './pages/GetInTouch'
import Observability from './pages/services/observability/Observability'
import NotFound from './pages/NotFound'

const Layout = () => (
  <div className="relative">
    <Navbar />
    <main className="relative z-10">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="get-in-touch" element={<GetInTouch />} />

        <Route path="services">
          <Route path="observability" element={<Observability />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
