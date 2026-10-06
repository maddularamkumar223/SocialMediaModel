import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../featues/authSlice'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout())
          navigate('/')
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Profile
