import React from 'react'

const PostsDetails = (props) => {
  return (
    <div className=' w-4/5 h-32 border-2 justify-center items-center'>
        <p>{props.postDetails.title}</p>
        <p>{props.postDetails.body}</p>
    </div>
  )
}

export default PostsDetails