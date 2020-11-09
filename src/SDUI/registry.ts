import Title from './components/Title';
import { Registry } from './UIContext';

const bannerLoader = () => import(
  /* webpackChunkName: "bannerSection" */
  './components/Banner'
);

export const registry: Registry = {
  TITLE: {
    component: Title,
  },

  BANNER: {
    loader: bannerLoader,
  }
};
