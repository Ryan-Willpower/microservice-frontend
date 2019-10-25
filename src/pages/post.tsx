import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetPost } from '../utils/getPost'
import { findResult } from '../types/data'
import { Comment } from '../components/comment'
import { CommentInput } from '../components/commentInput'
import { useComment } from '../utils/comment'
import { keyGen } from '../utils/mapKeyGenerator'

export const Post: React.FC = () => {
  const { id } = useParams()
  const postid = Number(id)
  const data: findResult | null = useGetPost(postid)
  const { data: commentData, loading } = useComment(postid)

  return (
    data && (
      <div>
        <h1>{data.find.title}</h1>
        <p>{data.find.content}</p>
        <div>{data.find.author}</div>

        <h1>Comment</h1>
        {loading && <div>loading some comment..</div>}
        {commentData && commentData.allComment.length > 0 ? (
          commentData.allComment.map((comment, index) => (
            <Comment commentData={comment} key={keyGen(index)} />
          ))
        ) : (
          <div>no comment yet</div>
        )}
        <CommentInput postid={postid} />
      </div>
    )
  )
}
