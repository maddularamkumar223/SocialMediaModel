import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleUser } from '../../services/authService'
import Style from './messages.module.css'
import { Link } from 'react-router-dom'

const Messages = () => {
  let { user } = useSelector(state => state.auth)
  let dispatch = useDispatch()

  let [userMessage, setUserMessage] = useState([])

  useEffect(() => {
    let getUsers = async () => {
      const users = await Promise.all(
        user.following.map(async id => {
          const result = await dispatch(fetchSingleUser(id))
          return result.payload
        })
      )
      setUserMessage(users)
    }
    getUsers()
  }, [user?.following?.length])
  return (
    <article id={Style.userContainer}>
      {userMessage.map(userData => {
        return (
          <aside>
            <div>{userData.name.at(0)}</div>
            <p>
              <Link to='/layout/displayMessage' state={userData}>
                {userData.name}
              </Link>
            </p>
          </aside>
        )
      })}
    </article>
  )
}

export default Messages
