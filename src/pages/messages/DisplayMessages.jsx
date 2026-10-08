import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Style from './messages.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages, fetchMessages } from '../../services/messageService'
import { userId } from '../../utilities'

const DisplayMessages = () => {
  let { state } = useLocation()
  let { messages, loading } = useSelector(state => state.messages)
  console.log(messages)
  let [messsage, setMessage] = useState('')
  let handleChange = e => {
    setMessage(e.target.value)
  }
  let dispatch = useDispatch()
  let handleSubmit = () => {
    let messageDetails = {
      sendId: localStorage.getItem('id'),
      reciverId: state.id,
      message: messsage
    }
    dispatch(addMessages(messageDetails))
    setMessage('')
  }
  useEffect(() => {
    dispatch(fetchMessages())
  }, [])

  let filterMessages = messages?.filter(
    message =>
      (message.sendId === localStorage.getItem('id') ||
        message.reciverId === localStorage.getItem('id')) &&
      (message.sendId === state.id || message.reciverId === state.id)
  )
  return (
    <article id={Style.messageContainer}>
      <aside>
        <div>{state.name.at(0)}</div>
        <p>{state.name}</p>
      </aside>
      <aside id={Style.messages}>
        {filterMessages?.map(message => {
          return <p>{message.message}</p>
        })}
      </aside>
      <aside id={Style.sendMessage}>
        <input
          type='text'
          placeholder='Enter Your Message'
          onChange={handleChange}
          value={messsage}
        />
        <button onClick={handleSubmit}>Send</button>
      </aside>
    </article>
  )
}

export default DisplayMessages
