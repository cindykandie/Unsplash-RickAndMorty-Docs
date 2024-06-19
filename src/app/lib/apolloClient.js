import { ApolloClient, InMemoryCache } from '@apollo/client';

// Create an Apollo Client instance
const client = new ApolloClient({
  // Specify the URI of the GraphQL endpoint
  uri: 'https://rickandmortyapi.com/graphql',
  // Use an in-memory cache for caching GraphQL data
  cache: new InMemoryCache(),
});

// Export the client instance for use in other parts of the app
export default client;
