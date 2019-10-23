import React from 'react'
import { Redirect } from 'react-router-dom'

import { cookies } from '../utils/cookies'

export const Logout: React.FC = () => {
  cookies.remove('userdata')
  window.location.href = '/'
  return <Redirect from='/logout' to='/' />
}
