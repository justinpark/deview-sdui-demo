import Title from './components/Title';
import { Registry } from './UIContext';

const bannerLoader = () =>
  import(
    /* webpackChunkName: "bannerSection" */
    './components/Banner'
  );

const productCardLoader = () =>
  import(
    /* webpackChunkName: "productCardSection" */
    './components/ProductCard'
  );

// For server-side rendering
if (typeof window === 'undefined') {
  bannerLoader.value = require('./components/Banner');
  productCardLoader.value = require('./components/ProductCard');
}

export const registry: Registry = {
  TITLE: {
    component: Title,
  },

  BANNER: {
    loader: bannerLoader,
  },

  PRODUCT_CARD: {
    loader: productCardLoader,
  },
};
