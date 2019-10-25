import React from 'react'
import styled from '@emotion/styled'

import { Postid } from '../types/comment'
import { useAddComment } from '../utils/addComment'

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

export const CommentInput: React.FC<Postid> = ({ postid }) => {
  const { setMessage, submit, error, data } = useAddComment()

  if (data && data.add.isSuccess) {
    window.location.href = `/post/${postid}`
  }

  return (
    <CommentTextarea>
      <div>
        {error && (
          <div style={{ color: 'red' }}>
            {error.message.includes('not login') && 'you are not login'}
          </div>
        )}
        <textarea
          rows={7}
          cols={100}
          placeholder="what's on your thought?"
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={() => submit(postid)}>Submit</button>
      </div>
    </CommentTextarea>
  )
}
