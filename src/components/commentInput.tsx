import React from 'react'
import styled from '@emotion/styled'

const CommentTextarea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  * {
    margin: 10px 0;
  }

  div {
    display: flex;
    flex-flow: column;

    button {
      width: 120px;
      height: 30px;
    }

    textarea {
      font-size: 1rem;
      padding: 5px;
    }
  }
`

export const CommentInput: React.FC = () => {
  return (
    <CommentTextarea>
      <div>
        <textarea rows={7} cols={100} placeholder="what's on your thought?" />
        <button>Submit</button>
      </div>
    </CommentTextarea>
  )
}
