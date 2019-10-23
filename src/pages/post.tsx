import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetPost } from '../utils/getPost'
import { findResult } from '../types/data'

export const Post: React.FC = () => {
  const { id } = useParams()
  const data: findResult | null = useGetPost(Number(id))
  return (
    data && (
      <div>
        <h1>{data.find.title}</h1>
        <p>{data.find.content}</p>
        <div>{data.find.author}</div>
      </div>
    )
  )
}
