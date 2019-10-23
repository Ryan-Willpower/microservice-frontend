import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { getUserData } from '../utils/cookies'

const PostheaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
  }
`

export const PostHeader: React.FC = () => {
  const userdata = getUserData()
  return (
    <PostheaderMain>
      <h1>Post</h1>
      {userdata && userdata.username && (
        <button>
          <Link to='/add'>+ Add post</Link>
        </button>
      )}
    </PostheaderMain>
  )
}
