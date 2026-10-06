import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, fetchPost } from '../services/postServices'
import DisplayPost from '../components/posts/DisplayPost'
import Style from './homepage.module.css'

const HomePage = () => {
  let dispatch = useDispatch()
  let { posts, loading, status, message } = useSelector(state => state.post)

  console.log(posts)
  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])

  useEffect(() => {
    if (status === 202) {
      alert(message)
    }
  }, [status])

  if (posts === null || posts.length === 0) {
    return <h1>No Data</h1>
  }
  return (
    <article id={Style.postsContainer}>
      {posts.map(post => {
        return (
          <aside>
            <DisplayPost
              image={post.image}
              description={post.caption}
            ></DisplayPost>

            <div>
              <p>like share comment</p>
              <button
                id={Style.delete}
                onClick={() => {
                  dispatch(deletePost(post.id))
                }}
              >
                Delete
              </button>
            </div>
          </aside>
        )
      })}
    </article>
  )
}

export default HomePage
