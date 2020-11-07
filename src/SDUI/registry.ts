import Title from './components/Title';
import { Registry } from './UIContext';

const bannerLoader = () => import(
  /* webpackChunkName: "bannerSection" */
  './components/Banner'
);

export const registry: Registry = {
  TitleSection: {
    component: Title,
  },

  BannerSection: {
    loader: bannerLoader,
  }
};
