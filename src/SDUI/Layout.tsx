import React from 'react';
import { useAppFrameworkContext } from './UIContext';
import Section from './Section';

type Props = {
  id: string;
}

export default function Layout({ id }: Props) {
  const { layouts } = useAppFrameworkContext();
  const activeSection = layouts?.get(id);

  return (
    <>
      {activeSection?.sectionIds.map((id) => (
        <Section key={id} id={id} />
      ))}
    </>
  );
}
