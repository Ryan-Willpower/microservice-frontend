import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export function useAddPost() {
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

  async function addPost() {
    await savePost({
      variables: {
        title,
        content: editorState,
      },
    })
  }

  return {
    editorState,
    setEditorState,
    setTitle,
    data,
    addPost,
  }
}
