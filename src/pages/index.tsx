import React from 'react'

import { PostHeader } from '../components/postHeader'
import { Post } from '../components/post'
// @todo #1 add actual data
import { data } from '../utils/mock'

export const Index = () => (
  <div>
    <PostHeader>
      <h1>Post</h1>
      <button>+ Add post</button>
    </PostHeader>
    <Post postData={data} />
    <Post postData={data} />
  </div>
)
