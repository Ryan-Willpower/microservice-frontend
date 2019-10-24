import React from 'react'
import { Redirect } from 'react-router-dom'

import { cookies } from '../utils/cookies'

export const Logout: React.FC = () => {
  // remove cookies until it gone
  while (cookies.get('userdata')) {
    cookies.remove('userdata')
  }
  window.location.href = '/'
  return <Redirect from='/logout' to='/' />
}
