import React from 'react'

import { PostHeader } from '../components/postHeader'
import { Post } from '../components/post'
import { useGetAll } from '../utils/getAllPosts'
import { getAllPostsResult } from '../types/data'
import { keyGen } from '../utils/mapKeyGenerator'

export const Index = () => {
  const data: getAllPostsResult | null = useGetAll()

  return (
    data && (
      <div>
        <PostHeader>
          <h1>Post</h1>
          <button>+ Add post</button>
        </PostHeader>
        {data.getPosts.map((post, index) => (
          <Post postData={post} key={keyGen(index)} />
        ))}
      </div>
    )
  )
}
