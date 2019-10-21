import React from 'react'
import { Global, css } from '@emotion/core'

const globalCSS = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const GlobalStyle = () => <Global styles={globalCSS} />
