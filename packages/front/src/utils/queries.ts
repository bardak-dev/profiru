import gql from 'graphql-tag';

export const NEWS_LIST=gql`
  query news{
    news {
      id
      createdAt
      updatedAt
      title
      description
      image
    }
  }
`;
