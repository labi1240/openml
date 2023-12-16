// lib/apollo.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'your-supabase-graphql-endpoint', // Replace with your actual endpoint
    cache: new InMemoryCache(),
});

export default client;
