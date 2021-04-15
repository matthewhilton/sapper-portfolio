import gql from 'graphql-tag';

export const GET_UNITS_LIST = gql`
query {
    studyunits(orderBy: priority_ASC) {
      title
      code
      tagline
      color
      studyunitFilters {
        slug
      }
    }
  }
`

export const GET_UNIT_FILTERS = gql`
query {
  studyunitFilters {
    title
    slug
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
    studyunitFilters {
      slug
    }
    workitems {
      id
      title
      slug
      cover {
        url
      }
      stackitems {
        id
        logo {
          url
        }
        title
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
  workitems(orderBy: pagepriority_DESC) {
    title
    year
    featured
    shortdescription
    slug
    id
    cover {
      url
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

export const GET_FEATURED_WORKITEMS = gql`
query {
  workitems(where: { featured: true}, orderBy: pagepriority_DESC) {
    title
    year
    featured
    shortdescription
    slug
    id
    pagepriority
    cover {
      url
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


export const GET_WORKITEM = gql`
query GetWorkitem($slug: String!){
  workitem(where: { slug: $slug}){
    title
    year
    description
    images {
      id
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
    stackitems {
      id
      logo {
        url
      }
      title
    }
    githubUrl
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

export const GET_BLOGPOSTS = gql`
query {
  blogposts {
    id
    title
    author
    url
    image {
      url
    }
  }
}
`
  