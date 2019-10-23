import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { PostData } from '../types/data'

const PostContainer = styled.div`
  a {
    text-decoration: none;
    * {
      color: #000;
    }
  }

  &:hover {
    transform: translate(3px, 3px);
  }
`

const PostMain = styled.div`
  height: 150px;
  border: 1px solid hsl(0, 0%, 0%);
  box-shadow: 3px 3px 5px hsla(0, 0%, 0%, 0.3);
  padding: 20px;
  margin-bottom: 20px;

  > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Post: React.FC<PostData> = ({ postData }) => {
  const { author, title, content, postid } = postData
  return (
    <PostContainer>
      <Link to={`/post/${postid}`}>
        <PostMain>
          <h1>{title}</h1>
          <p>{content}</p>
          <div>{author}</div>
        </PostMain>
      </Link>
    </PostContainer>
  )
}
