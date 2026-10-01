import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default App
