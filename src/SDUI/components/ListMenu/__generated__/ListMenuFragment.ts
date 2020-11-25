/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ListMenuFragment
// ====================================================

export interface ListMenuFragment_items {
  __typename: "ListMenuItem";
  title: string | null;
  url: string | null;
  divider: boolean | null;
}

export interface ListMenuFragment {
  __typename: "ListMenu";
  title: string | null;
  items: (ListMenuFragment_items | null)[] | null;
}
