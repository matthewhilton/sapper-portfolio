import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import fetch from 'cross-fetch'

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link =  createHttpLink({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckk2d603copij01xs2dw76bzh/master',
    fetch,
});

const client = new ApolloClient({
  // Provide required constructor fields
  cache,
  link,
  // Provide some optional constructor fields
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export {client};