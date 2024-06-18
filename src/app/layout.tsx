'use client';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apolloClient';
import './globals.css';

const RootLayout = ({ children }) => {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined';

  return (
    <html lang="en">
      <body>
        {isBrowser ? (
          <ApolloProvider client={client}>
            {children}
          </ApolloProvider>
        ) : (
          children
        )}
      </body>
    </html>
  );
};

export default RootLayout;
