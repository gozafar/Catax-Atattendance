import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

//* link
const httpLink = createHttpLink({
  // uri: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql',
  uri: 'https://catax-attendance-backend.herokuapp.com/graphql',
});

//* Authentication
const authLink = setContext((_, { headers }) => {
  // const data = JSON.parse(localStorage.getItem('persist:root'));

  //? Perform localStorage action
  //! taking Token from localStorage
  const userToken = localStorage.getItem('token');

  // newToken = userToken?.replace(/['"]+/g, '');
  return {
    headers: {
      ...headers,
      authorization: userToken && userToken !== null ? `Bearer ${userToken}` : '',
    },
  };
});

//*  catching Error
const errorLink = onError((error) => {
  const { graphQLErrors, networkError } = error;
  if (graphQLErrors) {
    // console.log('GraphQL error occurred');
    console.log(graphQLErrors);
  }
  if (networkError) {
    // console.log('Network error occurred');
    console.log(networkError);
    if (networkError.result) {
      const unAuthenticate = networkError.result.errors.find((er) => er.extensions.code === 'UNAUTHENTICATED');
      console.log(unAuthenticate);
      if (unAuthenticate) {
        // store.dispatch(reset());
      }
    }
    return;
  }
});

/**
 ** using ApolloClient
 */

export const client = new ApolloClient({
  ssrMode: true,
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
