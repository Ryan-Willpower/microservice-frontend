import React from 'react'
import { Redirect } from 'react-router'

import { useRegister } from '../utils/register'

export const Register: React.FC = () => {
  const {
    username,
    setUsername,
    passwd,
    setPasswd,
    register,
    data,
    error,
  } = useRegister()

  if (error) {
    throw error
  }

  if (data && data.register.isSuccess) {
    return <Redirect from='/register' to='/' />
  }

  return (
    <div>
      <h1>Register</h1>
      <label>username</label>
      <input type='text' onChange={e => setUsername(e.target.value)} />
      <label>password</label>
      <input type='password' onChange={e => setPasswd(e.target.value)} />
      <button
        onClick={() =>
          register({
            variables: {
              username,
              passwd,
            },
          })
        }
      >
        Submit
      </button>
    </div>
  )
}
