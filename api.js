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

  union AvailableSection = Title | Banner | ProductCard | ListMenu

  enum TitleLevel {
    XL
    LG
    MD
    SM
    XS
  }

  type Title {
    title: String
    subtitle: String
    level: TitleLevel
  }

  type Banner {
    icon: String
    title: String
    subtitle: String
    ctaCopy: String
    ctaUrl: String
  }

  type ProductItem {
    title: String
    subtitle: String
    imageUrl: String
    ctaCopy: String
    ctaUrl: String
  }

  type ProductCard {
    items: [ProductItem]
  }

  type Query {
    getUI: UIResponse
  }

  type ListMenuItem {
    title: String
    url: String
    divider: Boolean
  }

  type ListMenu {
    title: String
    items: [ListMenuItem]
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
            title: '발표될 연사 강의들',
            level: 'SM',
          }
        },
        {
          id: 'title03',
          sectionComponentType: 'TITLE',
          section: {
            __typename: 'Title',
            title: 'ML/AI 관련 강의들',
            level: 'SM',
          }
        },
        {
          id: 'banner01',
          sectionComponentType: 'BANNER',
          section: {
            __typename: 'Banner',
            title: '배너 제목 입니다',
            subtitle: '배너 설명 입니다.',
          }
        },
        {
          id: 'sidemenu01',
          sectionComponentType: 'LIST_MENU',
          section: {
            __typename: 'ListMenu',
            title: '참조 링크',
            items: [
              {
                title: '깃헙 홈페이지',
                url: 'https://github.com/justinpark/deview-sdui-demo',
              },
              {
                divider: true,
              },
              {
                title: 'Deview 2020 홈페이지',
                url: 'https://deview.kr/2020',
              }
            ]
          }
        },
        {
          id: 'product01',
          sectionComponentType: 'PRODUCT_CARD',
          section: {
            __typename: 'ProductCard',
            items: [
              {
                title: 'COVID-19에 대응하는 네이버의 동영상 트래픽 컨트롤 시스템',
                imageUrl: 'https://deview.kr/data/deview/acnr/560-2.png',
                ctaCopy: '강의 정보',
                ctaUrl: 'https://deview.kr/2020/sessions/385',
              },
              {
                title: '외국어가 읽힌다 딱! (파파고 이미지 번역)',
                imageUrl: 'https://deview.kr/2020/img/img_topic_graphic_4.png',
                ctaCopy: '강의 정보',
                ctaUrl: 'https://deview.kr/2020/sessions/338',
              },
              {
                title: '어서와, SSR은 처음이지?',
                imageUrl: 'https://deview.kr/data/deview/acnr/657-2.png',
                ctaCopy: '강의 정보',
                ctaUrl: 'https://deview.kr/2020/sessions/403',
              }
            ]
          }
        },
        {
          id: 'feature01',
          sectionComponentType: 'PRODUCT_CARD',
          section: {
            __typename: 'ProductCard',
            items: [
              {
                title: 'COVID-19에 대응하는 네이버의 동영상 트래픽 컨트롤 시스템',
                imageUrl: 'https://deview.kr/2020/img/img_topic_graphic_4.png',
                ctaCopy: '강의 정보',
                ctaUrl: 'https://deview.kr/2020/sessions/329',
              },
              {
                title: '누구나 만드는 내 목소리 합성기 Ⅱ (커스텀 보이스 파이프라인)',
                imageUrl: 'https://deview.kr/data/deview/acnr/415.png',
                ctaCopy: '강의 정보',
                ctaUrl: 'https://deview.kr/2020/sessions/354',
              },
              {
                title: '유저가 좋은 작품(웹툰)를 만났을 때(유저의 탐색, 발견 그리고 만족도에 대하여 탐색적 분석하기)',
                imageUrl: 'https://deview.kr/2020/img/img_topic_graphic_4.png',
                ctaCopy: '강의 정보',
                ctaUrl: 'https://deview.kr/2020/sessions/332',
              }
            ]
          }
        },
      ],
    }),
  },
  UIResponse: {
    layouts: () => [
      {
        id: 'MAIN',
        sectionIds: ['title01', 'title02', 'product01', 'title03', 'feature01'],
      },
      {
        id: 'SIDEBAR',
        sectionIds: ['banner01', 'sidemenu01'],
      },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
