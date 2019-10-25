import React from 'react'

import { Comment } from './comment'
import { CommentInput } from './commentInput'
import { keyGen } from '../utils/mapKeyGenerator'
import { useComment } from '../utils/comment'
import { Postid } from '../types/comment'

export const CommentSection: React.FC<Postid> = ({ postid }) => {
  const { data: commentData, loading } = useComment(postid)

  return (
    <>
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
    </>
  )
}
