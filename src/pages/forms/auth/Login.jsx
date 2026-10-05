import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../components/Input'
import Style from '../form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { validation } from '../../../services/authService'

const Login = () => {
  let [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  })
  let { email, password } = loginDetails
  let loginData = [
    {
      name: 'email',
      placeholder: 'Enter Your Email',
      value: email,
      label: 'Email',
      type: 'email'
    },
    {
      name: 'password',
      placeholder: 'Enter Your Password',
      value: password,
      label: 'Password',
      type: 'password'
    }
  ]
  let handleChange = e => {
    let { name, value } = e.target
    setLoginDetails({ ...loginDetails, [name]: value })
  }

  let navigate = useNavigate()
  let dispatch = useDispatch()
  let { loading, status, message, updateStatus, user } = useSelector(
    state => state.auth
  )
  let handleSubmit = e => {
    e.preventDefault()
    console.log(loginDetails)
    dispatch(validation(loginDetails))
  }

  useEffect(() => {
    if (status === 200) {
      alert(message)
      localStorage.setItem('id', user.id)
      navigate('/layout')
      dispatch(updateStatus())
    } else if (status === 404) {
      alert(message)
    }
  }, [status])

  return (
    <form id={Style.formData} onSubmit={handleSubmit}>
      <aside>
        <h1>
          <img
            src='https://thumbs.wbm.im/pw/small/26cdaa21d7039546ac5aa10a591d6498.png'
            alt=''
            height='100px'
          />
        </h1>
      </aside>
      {loginData.map(data => {
        return (
          <Input
            type={data.type}
            placeholder={data.placeholder}
            label={data.label}
            name={data.name}
            value={data.value}
            handleChange={handleChange}
          ></Input>
        )
      })}
      <aside>
        <button>{loading ? 'Loading...' : 'Login'}</button>
      </aside>
      <p>
        Dont' Have Account? <Link to='/register'>Sign Up</Link>
      </p>
    </form>
  )
}

export default Login
