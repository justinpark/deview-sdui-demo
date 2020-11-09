import React from 'react';
import { registry } from './registry';
import AppFramework from './AppFramework';
import PageScreen from './PageScreen';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const query = loader('./query.graphql');

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
