import Cookies from 'universal-cookie'
import decode from 'jwt-decode'

import { UserData } from '../types/userdata'

export const cookies = new Cookies()

export function getUserData(): UserData | null {
  try {
    const encryptUserData = cookies.get('userdata')
    const userData: UserData = decode(encryptUserData)

    return userData
  } catch (error) {
    return null
  }
}
