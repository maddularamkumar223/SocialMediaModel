import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Input from '../../../components/Input'
import Style from '../form.module.css'

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
  let handleSubmit = e => {
    e.preventDefault()
    console.log(loginDetails)
    navigate('/layout')
  }
  return (
    <form id={Style.formData} onSubmit={handleSubmit}>
      <aside>
        <h1>Social Media</h1>
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
        <button>Login</button>
      </aside>
      <p>
        Dont' Have Account? <Link to='/register'>Sign Up</Link>
      </p>
    </form>
  )
}

export default Login
