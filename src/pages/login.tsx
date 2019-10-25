import React from 'react'
import { Redirect, Link } from 'react-router-dom'

import { cookies } from '../utils/cookies'
import { useLogin } from '../utils/login'

export const Login: React.FC = () => {
  const {
    username,
    passwd,
    login,
    loading,
    data,
    error,
    saveUsername,
    savePasswd,
  } = useLogin()

  if (loading) return <p>Loging in...</p>

  if (error) {
    throw error
  }

  if (data && data.login.isSuccess) {
    cookies.set('userdata', data.login.jwt)
    window.location.href = '/'
    return <Redirect from='/login' to='/' />
  }

  return (
    <div>
      {data && !data.login.isSuccess && <p>wrong username or password</p>}
      <input type='text' onChange={e => saveUsername(e)} />
      <input type='password' onChange={e => savePasswd(e)} />
      <button
        onClick={() =>
          login({
            variables: {
              username,
              passwd,
            },
          })
        }
      >
        Login
      </button>
      <p>
        Don't have account? <Link to='/register'>register!</Link>
      </p>
    </div>
  )
}
