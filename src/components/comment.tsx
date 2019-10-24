import React from 'react'
import styled from '@emotion/styled'

import { CommentObj } from '../types/comment'

const CommentBox = styled.div`
  box-sizing: border-box;
  border: 1px solid hsl(0, 0%, 0%);
  width: 100%;
  box-shadow: 3px 3px 7px hsla(0, 0%, 0%, 70%);
  padding: 10px 30px;
  margin-bottom: 10px;
`

export const Comment: React.FC<CommentObj> = ({ commentData }) => {
  const { username, message, date } = commentData
  return (
    <CommentBox>
      <p>
        <strong>{username}</strong> : {date}
      </p>
      <p>{message}</p>
    </CommentBox>
  )
}
