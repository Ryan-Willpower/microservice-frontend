import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import React from 'react'

import { AddComment } from '../types/comment'

export function useAddComment(): AddComment {
  const query = gql`
    mutation AddComment($postid: Int!, $message: String!) {
      add(postid: $postid, message: $message) {
        isSuccess
      }
    }
  `

  const [message, setMessage] = React.useState('')
  const [addComment, { data, error }] = useMutation(query)

  async function submit(postid: number) {
    addComment({
      variables: {
        postid,
        message,
      },
    })
  }

  return {
    setMessage,
    submit,
    data,
    error,
  }
}
