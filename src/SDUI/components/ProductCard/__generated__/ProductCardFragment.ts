/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductCardFragment
// ====================================================

export interface ProductCardFragment_items {
  __typename: "ProductItem";
  title: string | null;
  subtitle: string | null;
  imageUrl: string | null;
  ctaUrl: string | null;
  ctaCopy: string | null;
}

export interface ProductCardFragment {
  __typename: "ProductCard";
  items: (ProductCardFragment_items | null)[] | null;
}
