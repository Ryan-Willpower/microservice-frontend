import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetPost } from '../utils/getPost'
import { findResult } from '../types/data'
import { Comment } from '../components/comment'
import { CommentInput } from '../components/commentInput'

const datetime = Date.now()

export const Post: React.FC = () => {
  const { id } = useParams()
  const data: findResult | null = useGetPost(Number(id))
  return (
    data && (
      <div>
        <h1>{data.find.title}</h1>
        <p>{data.find.content}</p>
        <div>{data.find.author}</div>

        <h1>Comment</h1>
        {/* Mock data */}
        <Comment
          commentData={{ username: 'ryan', message: '1234', datetime }}
        />
        <CommentInput />
      </div>
    )
  )
}
