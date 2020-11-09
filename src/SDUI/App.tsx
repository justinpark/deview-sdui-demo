import React from 'react';
import { registry } from './registry';
import AppFramework from './AppFramework';
import PageScreen from './PageScreen';
import { useQuery, gql } from '@apollo/client';

const query = gql`
fragment TitleFragment on Title {
  title
  subtitle
}
fragment BannerFragment on Banner {
  icon
  title
  subtitle
  ctaUrl
  ctaCopy
}

query {
  getUI {
    sections {
      id
      sectionComponentType
      section {
        ...TitleFragment
        ...BannerFragment
      }
    }
    layouts {
      id
      sectionIds
    }
  }
}
`;

export default function App() {
  const { loading, data } = useQuery(query);
  if (loading) {
    return <span>로딩 중...</span>;
  }

  return (
    <AppFramework registry={registry} metadata={data.getUI}>
      <PageScreen />
    </AppFramework>
  )
}
