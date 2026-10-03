import { useEffect, useState } from 'react'
import Input from '../../../components/Input'
import Style from '../form.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../../services/authService'
import { updateStatus } from '../../../featues/authSlice'

const Register = () => {
  let { status, message, loading } = useSelector(state => state.auth)
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
  let dispatch = useDispatch()
  let handleSubmit = e => {
    e.preventDefault()
    console.log(registerDetails)
    if (
      name === '' ||
      password === '' ||
      gender === '' ||
      email === '' ||
      dob === ''
    ) {
      alert('Fill All The Fields')
    } else {
      dispatch(addUser(registerDetails))
    }
  }

  let navigate = useNavigate()

  useEffect(() => {
    if (status === 201) {
      alert(message)
      dispatch(updateStatus())
      navigate('/')
    }
  }, [status])

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
        <button>{loading ? 'Loading...' : 'Sign up'}</button>
      </aside>

      <p>
        Already Account Exist? <Link to='/'>Log In</Link>
      </p>
    </form>
  )
}

export default Register
