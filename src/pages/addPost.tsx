import React from 'react'
import styled from '@emotion/styled'
import { Redirect } from 'react-router-dom'
import { getUserData } from '../utils/cookies'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import { ContentEditor } from '../components/editor'

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
  const query = gql`
    mutation AddPost($title: String!, $content: String!) {
      addPost(title: $title, content: $content) {
        isSuccess
        description
      }
    }
  `

  const [editorState, setEditorState] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [savePost, { data }] = useMutation(query)
  console.log(data)
  async function addPost() {
    await savePost({
      variables: {
        title,
        content: editorState,
      },
    })
  }

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
