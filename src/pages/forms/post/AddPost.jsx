import { useEffect, useState } from 'react'
import Input from '../../../components/Input'
import Style from '../form.module.css'
import { userId } from '../../../utilities'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../../services/postServices'
import { updateStatus } from '../../../featues/postSlice'
const AddPost = () => {
  let [postDetails, setPostDetails] = useState({
    image: '',
    caption: ''
  })

  // console.log(userId)

  let { image, caption } = postDetails

  let postData = [
    {
      name: 'image',
      value: image,
      label: 'Upload Image',
      type: 'file'
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
      value: caption,
      placeholder: 'Enter Your Caption'
    }
  ]

  let dispatch = useDispatch()
  let handleChange = e => {
    let { name, value, files, type } = e.target
    console.log(image)

    // if (type === 'file') {
    //   setPostDetails({ ...postDetails, [name]: files[0] })
    // } else {
    //   setPostDetails({ ...postDetails, [name]: value })
    // }

    setPostDetails({
      ...postDetails,
      [name]: type === 'file' ? files[0] : value
    })
  }

  let handleSubmit = e => {
    e.preventDefault()

    if (caption === '' || image === '') {
      alert('Fill All The Fields')
    } else {
      let imageUrl = URL.createObjectURL(image)
      let details = {
        ...postDetails,
        image: imageUrl,
        user_id: userId
      }
      dispatch(addPost(details))
    }
  }

  let { loading, status, message } = useSelector(state => state.post)
  useEffect(() => {
    if (status === 201) {
      alert(message)
      dispatch(updateStatus())
    }
  }, [status])
  return (
    <form id={Style.formData} onSubmit={handleSubmit}>
      <aside>
        <h1>Add Post</h1>
      </aside>
      {postData.map(post => {
        return (
          <Input
            name={post.name}
            label={post.label}
            placeholder={post.placeholder}
            type={post.type}
            value={post.value}
            handleChange={handleChange}
          ></Input>
        )
      })}
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  )
}

export default AddPost
