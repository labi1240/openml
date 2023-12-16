import { gql } from '@apollo/client';

// Query to fetch models based on filters
export const FETCH_MODELS_QUERY = gql`
  query FetchModels($country: String, $category: String, $tags: [String!]) {
    models(where: { country: { _eq: $country }, category: { _eq: $category }, tags: { _has_keys_any: $tags } }) {
      id
      name
      country
      category
      tags
      // Add other fields as necessary
    }
  }
`;
