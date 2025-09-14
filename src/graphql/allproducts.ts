import { gql } from "graphql-tag";

export const GET_ALL_PORDUCTS = gql`
  query getProducts {
    products(first: 10) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
`;
