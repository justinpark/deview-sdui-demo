import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default function AppContainer() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
