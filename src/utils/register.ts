import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export function useRegister() {
  const query = gql`
    mutation Register($username: String!, $passwd: String!) {
      register(username: $username, passwd: $passwd) {
        isSuccess
        description
      }
    }
  `

  const [username, setUsername] = React.useState('')
  const [passwd, setPasswd] = React.useState('')
  const [register, { data }] = useMutation(query)

  return {
    username,
    setUsername,
    passwd,
    setPasswd,
    register,
    data,
  }
}
