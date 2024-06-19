'use client';
import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apolloClient';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined';

  return (
    <html lang="en">
      <body>
        {/* Conditionally render ApolloProvider if in a browser environment */}
        {isBrowser ? (
          <ApolloProvider client={client}>
            {children}
          </ApolloProvider>
        ) : (
          // Render children directly if not in a browser environment
          children
        )}
      </body>
    </html>
  );
};

export default RootLayout;
