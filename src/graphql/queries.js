import gql from 'graphql-tag';

export const GET_UNITS_LIST = gql`query {
    studyunits {
      title
      code
      tagline
      color
    }
  }`