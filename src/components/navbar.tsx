import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { color, fontSize } from '../utils/constant'
import { getUserData } from '../utils/cookies'

const NavbarMain = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;

  strong {
    font-size: ${fontSize.strong};
  }

  * {
    text-decoration: none;
    color: ${color.main};
    cursor: pointer;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  > a {
    padding: 0 10px;

    :hover {
      text-decoration: underline;
    }
  }

  p {
    padding-left: 20px;
  }
`

export const Navbar: React.FC = () => {
  const userdata = getUserData()

  return (
    <NavbarMain>
      <Link to='/'>
        <strong>Logo</strong>
      </Link>
      <Menu>
        <Link to='/'>Home</Link>
        {userdata ? (
          <>
            <Link to='/logout'>Logout</Link>
            <p>user: {userdata.username}</p>
          </>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </Menu>
    </NavbarMain>
  )
}
