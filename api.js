const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type UIResponse {
    layouts: [Layout]
    sections: [SectionContainer]
  }

  type Layout {
    id: String
    sectionIds: [String]
  }

  type SectionContainer {
    id: String
    sectionComponentType: String
    section: AvailableSection
  }

  union AvailableSection = Title | Banner

  type Title {
    title: String
    subtitle: String
  }

  type Banner {
    icon: String
    title: String
    subtitle: String
    ctaCopy: String
    ctaUrl: String
  }

  type Query {
    getUI: UIResponse
  }
`;

const resolvers = {
  AvailableSection: {
    __resolveType(obj){

      return obj.__typename;
    },
  },
  Query: {
    getUI: () => ({
      sections: [
        {
          id: 'title01',
          sectionComponentType: 'TITLE',
          section: {
            __typename: 'Title',
            title: '데뷰 2020 데모',
          }
        },
        {
          id: 'title02',
          sectionComponentType: 'TITLE',
          section: {
            __typename: 'Title',
            title: '환영합니다'
          }
        },
        {
          id: 'banner01',
          sectionComponentType: 'BANNER',
          section: {
            __typename: 'Banner',
            title: '배너 제목 입니다'
          }
        },
      ],
      layouts: [
        {
          id: 'MAIN',
          sectionIds: ['title01', 'banner01', 'title02'],
        }
      ],
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
