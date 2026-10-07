import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, follow } from '../../services/authService'
import Style from './search.module.css'

const Search = () => {
  let { users, user } = useSelector(state => state.auth)
  let userId = localStorage.getItem('id')
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  return (
    <article id={Style.userContainer}>
      {users.map(userData => {
        return (
          <aside>
            <div>{userData.name.slice(0, 1)}</div>
            <p>{userData.name}</p>
            <button
              onClick={() => {
                dispatch(
                  follow({ currentUserId: userId, follwerId: userData.id })
                )
              }}
            >
              {user?.following.includes(userData.id) ? 'Following' : 'Follow'}
            </button>
          </aside>
        )
      })}
    </article>
  )
}

export default Search
