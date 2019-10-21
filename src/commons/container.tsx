import React from 'react'
import styled from '@emotion/styled'

export const sizes = {
  large: 1280,
}

const ContainerBox = styled.div`
  width: ${sizes.large}px;
  margin-left: auto;
  margin-right: auto;
`

export const Container: React.FC = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>
}
