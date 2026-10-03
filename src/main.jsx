import { createRoot } from 'react-dom/client'
import App from './App'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import RouteData from './routes/RouteData'
import { Provider } from 'react-redux'
import StoreData from './store/Store'

createRoot(document.getElementById('root')).render(
  <Provider store={StoreData}>
    <RouterProvider router={RouteData}>
      <App></App>
    </RouterProvider>
  </Provider>
)
