import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import Search from '../pages/search/Search'
import Notification from '../pages/notifictions/Notfication'
import Profile from '../pages/profile/Profile'
import Messages from '../pages/messages/Messages'
import AddPost from '../pages/forms/post/AddPost'

let RouteData = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: '/search',
        element: <Search></Search>
      },
      {
        path: '/notification',
        element: <Notification></Notification>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/messages',
        element: <Messages></Messages>
      },
      {
        path: '/addPost',
        element: <AddPost></AddPost>
      }
    ]
  }
])

export default RouteData
