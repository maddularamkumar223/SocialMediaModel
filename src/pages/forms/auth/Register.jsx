import React, { useState } from 'react'
import Input from '../../../components/Input'
import Style from '../form.module.css'
import { Link } from 'react-router-dom'

const Register = () => {
  let [registerDetails, setRegisterDetails] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    dob: ''
  })
  let { name, password, email, gender, dob } = registerDetails

  let handleChange = e => {
    let { name, value } = e.target
    setRegisterDetails({ ...registerDetails, [name]: value })
  }
  let handleSubmit = e => {
    e.preventDefault()
    console.log(registerDetails)
  }

  let registerData = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Enter Your name',
      label: 'Name',
      value: name
    },
    {
      name: 'email',
      type: 'email',
      value: email,
      label: 'email',
      placeholder: 'Enter Your Email'
    },
    {
      name: 'dob',
      value: dob,
      label: 'Date Of Birth',
      type: 'date'
    },
    {
      name: 'password',
      value: password,
      label: 'Password',
      placeholder: 'Enter Your Password',
      type: 'password'
    }
  ]
  return (
    <form id={Style.formData} onSubmit={handleSubmit}>
      <aside>
        <h1>Social Media</h1>
      </aside>
      {registerData.map(data => {
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
      <aside value={gender} onChange={handleChange} name='gender'>
        <label htmlFor='gender'>Gender</label>
        <input type='radio' name='gender' id={Style.gender} value='male' />{' '}
        <span>Male</span>
        <input type='radio' name='gender' id={Style.gender} value='female' />
        <span>Female</span>
        <input type='radio' name='gender' id={Style.gender} value='others' />
        <span>Others</span>
      </aside>
      <aside>
        <button>Sign Up</button>
      </aside>

      <p>
        Already Account Exist? <Link to='/'>Log In</Link>
      </p>
    </form>
  )
}

export default Register
