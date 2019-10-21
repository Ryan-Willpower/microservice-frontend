import React from 'react'
import styled from '@emotion/styled'

const PostheaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostHeader: React.FC = () => {
  return (
    <PostheaderMain>
      <h1>Post</h1>
      <button>+ Add post</button>
    </PostheaderMain>
  )
}
