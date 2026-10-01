import { createRoot } from 'react-dom/client'
import App from './App'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import RouteData from './routes/RouteData'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={RouteData}>
    <App></App>
  </RouterProvider>
)
