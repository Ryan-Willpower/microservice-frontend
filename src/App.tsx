import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import { GlobalStyle } from './components/globalStyle'
import { Navbar } from './components/navbar'
import { Container } from './components/container'
import { client } from './utils/apolloClient'
import { RouteController } from './components/route'

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Navbar />
          <RouteController />
        </Container>

        <GlobalStyle />
      </Router>
    </ApolloProvider>
  )
}
