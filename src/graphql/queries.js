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
    workitems {
      id
      title
      slug
      cover {
        url
      }
    }
    stackitems {
      id
      logo {
        url
      }
      title
    }
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
    id
    cover {
      url
    }
  }
}
`

export const GET_WORKITEM = gql`
query GetWorkitem($slug: String!){
  workitem(where: { slug: $slug}){
    title
    year
    description
    images {
      url
    }
    cover {
      url
    }
    studyunit {
      title
      color
      code
    }
  }
}
`

export const GET_IMAGE = gql`
query GetImage($imageId: ID!){
  asset(where: { id: $imageId}){
    id
    url
  }
}
`
  