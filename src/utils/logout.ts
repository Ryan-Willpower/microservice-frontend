import { cookies } from './cookies'

export function logout() {
  cookies.remove('userdata')

  window.location.href = '/'
}
