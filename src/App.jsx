import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <main>
      <section id="appData">
        <Outlet></Outlet>
      </section>
    </main>
  )
}

export default App
