import { gql } from 'apollo-boost';

const GET_USERS_QUERY = gql`
  {
    users {
      name
      email
    }
  }
`;

const GET_ITEMS_QUERY = gql`
  {
    items {
      id
      name
      category
      price
      imageURL
      onSale
      isFeatured
    }
  }
`;

const FIND_BY_CATEGORY = gql`
  query($category: String!) {
    category(category: $category) {
      name
      id
      category
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const GET_BOOK_QUERY = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export {
  GET_ITEMS_QUERY,
  GET_USERS_QUERY,
  ADD_BOOK_MUTATION,
  GET_BOOK_QUERY,
  FIND_BY_CATEGORY
};
