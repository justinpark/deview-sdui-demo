import React from 'react';
import Context, { Metadata, Registry } from './UIContext';

type Props = {
  registry: Registry;
  metadata: Metadata;
  children: React.ReactNode;
};

export default function AppFramework({ registry, metadata, children }: Props) {
  const sections = new Map(metadata.sections.map((section) => [section.id, section]));
  const layouts = new Map(metadata.layouts.map((layout) => [layout.id, layout]));
  const context = {
    sections,
    layouts,
    registry,
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}
