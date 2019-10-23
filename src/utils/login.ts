import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export function useLogin() {
  const query = gql`
    query Login($username: String!, $passwd: String!) {
      login(username: $username, passwd: $passwd) {
        isSuccess
        description
        jwt
      }
    }
  `

  const [username, setUsername] = React.useState('')
  const [passwd, setPasswd] = React.useState('')
  const [login, { loading, data }] = useLazyQuery(query)

  function saveUsername(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') {
      return -1
    }

    setUsername(e.target.value)
  }

  function savePasswd(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') {
      return -1
    }

    setPasswd(e.target.value)
  }

  return {
    username,
    passwd,
    login,
    loading,
    data,
    saveUsername,
    savePasswd,
  }
}
