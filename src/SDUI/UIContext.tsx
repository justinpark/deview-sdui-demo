import React, { useContext } from 'react';

const UIContext = React.createContext<{
  layouts?: Map<string, Layout>;
  sections?: Map<string, Section>;
  registry?: Registry;
}>({});

export type Registry = {
  [key: string]: Partial<{
    component: React.FC;
    loader: () => Promise<{ default: React.FC }>;
  }>;
};

export type Layout = {
  id: string;
  subsectionIds: string[];
};

export type Section = {
  id: string;
  type: string;
};

export type Metadata = {
  layouts: Layout[];
  sections: Section[];
}

export default UIContext;

export function useAppFrameworkContext() {
  return useContext(UIContext);
}
