import React from 'react'
import styled from '@emotion/styled'

import { sizes } from '../utils/constant'

const ContainerBox = styled.div`
  width: ${sizes.large}px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
`

export const Container: React.FC = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>
}
