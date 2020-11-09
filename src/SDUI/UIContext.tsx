import React, { useContext } from 'react';

const UIContext = React.createContext<{
  layouts?: Map<string, Layout>;
  sections?: Map<string, Section>;
  registry?: Registry;
}>({});

export type Registry = {
  [key: string]: Partial<{
    component: React.FC<any>;
    loader: () => Promise<{ default: React.FC<any> }>;
  }>;
};

export type Layout = {
  id: string;
  sectionIds: string[];
};

export type Section = {
  id: string;
  sectionComponentType: string;
  section: object;
};

export type Metadata = {
  layouts: Layout[];
  sections: Section[];
}

export default UIContext;

export function useAppFrameworkContext() {
  return useContext(UIContext);
}
