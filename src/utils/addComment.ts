import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import React from 'react'
import { MutationResult } from '@apollo/react-common'

import { AddComment } from '../types/comment'

export function useAddComment(): AddComment {
  const [userComment, addUsercomment] = React.useState({})

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

  React.useEffect(() => {
    addUsercomment(data)
  }, [data])

  return {
    setMessage,
    submit,
    data,
    error,
  }
}
