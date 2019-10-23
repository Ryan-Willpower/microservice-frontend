import React from 'react'
import styled from '@emotion/styled'
import { Redirect } from 'react-router-dom'

import { getUserData } from '../utils/cookies'
import { ContentEditor } from '../components/editor'
import { useAddPost } from '../utils/addpost'

const AddPostMain = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 90%;

  label,
  input,
  for-container,
  button {
    flex: 0 1 auto;
    margin: 10px 0;
  }

  input {
    width: 50%;
    padding: 5px 0;
    text-align: center;
    font-size: 1.3rem;
  }
`

const AddPost: React.FC = () => {
  const { editorState, setEditorState, setTitle, data, addPost } = useAddPost()

  if (data && data.addPost.isSuccess) {
    return <Redirect from='/add' to='/' />
  }

  return (
    <AddPostMain>
      <h1>Add post</h1>
      <label>Title</label>
      <input type='text' onChange={e => setTitle(e.target.value)} />
      <label>Content</label>
      <ContentEditor
        editorState={editorState}
        setEditorState={setEditorState}
      />
      <button onClick={async () => addPost()}>Add post</button>
    </AddPostMain>
  )
}

export const ProtectedAddPost: React.FC = () => {
  const userdata = getUserData()

  return userdata && userdata.username ? (
    <AddPost />
  ) : (
    <Redirect from='/add' to='/' />
  )
}
