import React from 'react'
import { useParams } from 'react-router-dom'

import { CommentSection } from '../components/commentSection'
import { ErrorBoundary } from '../components/error'
import { useGetPost } from '../utils/getPost'
import { findResult } from '../types/data'

export const Post: React.FC = () => {
  const { id } = useParams()
  const postid = Number(id)
  const data: findResult | null = useGetPost(postid)

  return (
    data && (
      <div>
        <h1>{data.find.title}</h1>
        <p>{data.find.content}</p>
        <div>{data.find.author}</div>

        <ErrorBoundary>
          <CommentSection postid={postid} />
        </ErrorBoundary>
      </div>
    )
  )
}
