import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import Search from '../pages/search/Search'
import Notification from '../pages/notifictions/Notfication'
import Profile from '../pages/profile/Profile'
import Messages from '../pages/messages/Messages'
import AddPost from '../pages/forms/post/AddPost'
import Layout from '../Layout'
import Register from '../pages/forms/auth/Register'
import Login from '../pages/forms/auth/Login'

let RouteData = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        index: true,
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/layout',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: '/layout/search',
        element: <Search></Search>
      },
      {
        path: '/layout/notification',
        element: <Notification></Notification>
      },
      {
        path: '/layout/profile',
        element: <Profile></Profile>
      },
      {
        path: '/layout/messages',
        element: <Messages></Messages>
      },
      {
        path: '/layout/addPost',
        element: <AddPost></AddPost>
      }
    ]
  }
])

export default RouteData
