import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { API_HOST_DEV_SIMPLE } from './constants'

const configureApolloClient = () => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: API_HOST_DEV_SIMPLE }),
    cache: new InMemoryCache(),
  })
  return client
}

export default configureApolloClient
