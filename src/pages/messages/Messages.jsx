import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleUser } from '../../services/authService'
import Style from './messages.module.css'

const Messages = () => {
  let { user } = useSelector(state => state.auth)
  let dispatch = useDispatch()

  let [userMessage, setUserMessage] = useState([])

  useEffect(() => {
    user?.following.map(async ids => {
      let singleUser = await dispatch(fetchSingleUser(ids))
      setUserMessage(prev => [...prev, singleUser.payload])
    })
  }, [user.following.length])
  return (
    <article id={Style.userContainer}>
      {userMessage.map(userData => {
        return (
          <aside>
            <div>{userData.name.at(0)}</div>
            <p>{userData.name}</p>
          </aside>
        )
      })}
    </article>
  )
}

export default Messages
