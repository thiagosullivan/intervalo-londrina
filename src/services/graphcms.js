import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              id
            }
            createdAt
            slug
            title
            resume
            postImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_DESC
        first: 4
      ) {
        title
        slug
        createdAt
        resume
        category {
          name
          slug
        }
        postImage {
          url
        }
        author {
          name
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSimilarPosts = async (category, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $category: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {category_some: {slug_in: $category}}}
        last: 3
      ) {
        title
        slug
        createdAt
        postImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, category });

  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        resume
        postImage {
          url
        }
        author {
          name
          id
        }
        createdAt
        slug
        content {
          markdown
          raw
        }
        category {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};