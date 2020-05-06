import withApollo from 'next-with-apollo';

import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from 'apollo-boost'

function createClient({ headers, initialState }) {
  const adjustedUrl = typeof window === 'undefined' ? 'http://server:4000' : 'http://localhost:4000'

  const httpLink = new HttpLink({
    uri: `${adjustedUrl}/graphql`,
  })

  return new ApolloClient({
    link: httpLink,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default withApollo(createClient);
