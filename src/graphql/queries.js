import gql from 'graphql-tag';

export const GET_UNITS_LIST = gql`
query {
    studyunits {
      title
      code
      tagline
      color
    }
  }
`

export const GET_UNIT_DATA = gql`
query UnitData($unitcode: String!) {
  studyunit(where: {code: $unitcode}) {
    title
    color
    code
    description
  }
}
`

export const GET_WORKITEMS_LIST = gql`
query {
  workitems {
    title
    year
    featured
    shortdescription
    slug
    cover {
      url
    }
  }
}
`
  