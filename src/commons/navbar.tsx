import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const NavbarMain = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;

  strong {
    font-size: 1.3rem;
  }

  * {
    text-decoration: none;
    color: hsl(40, 100%, 50%);
    cursor: pointer;
  }

  :visited {
    color: hsl(128, 100%, 50%);
  }
`

const Menu = styled.div`
  > a {
    padding: 0 10px;

    :hover {
      text-decoration: underline;
    }
  }
`

export const Navbar: React.FC = () => (
  <NavbarMain>
    <Link to='/'>
      <strong>Logo</strong>
    </Link>
    <Menu>
      <Link to='/'>Home</Link>
      <Link to='/'>Post</Link>
      <Link to='/'>Login</Link>
    </Menu>
  </NavbarMain>
)
