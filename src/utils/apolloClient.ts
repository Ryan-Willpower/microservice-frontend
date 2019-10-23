import ApolloClient from 'apollo-boost'
import {cookies} from '../utils/cookies'

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: (operation) => {
    const token = cookies.get('userdata')
    operation.setContext({
      headers: {
        authorization: token ? `${token}` : ''
      }
    })
  }
})
