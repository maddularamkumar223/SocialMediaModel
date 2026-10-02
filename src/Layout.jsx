import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

const Layout = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
      {/* Layout */}
    </main>
  )
}

export default Layout
