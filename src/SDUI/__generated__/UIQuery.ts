/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TitleLevel } from "./globalTypes";

// ====================================================
// GraphQL query operation: UIQuery
// ====================================================

export interface UIQuery_getUI_sections_section_Title {
  __typename: "Title";
  title: string | null;
  subtitle: string | null;
  level: TitleLevel | null;
}

export interface UIQuery_getUI_sections_section_Banner {
  __typename: "Banner";
  icon: string | null;
  title: string | null;
  subtitle: string | null;
  ctaUrl: string | null;
  ctaCopy: string | null;
}

export interface UIQuery_getUI_sections_section_ProductCard_items {
  __typename: "ProductItem";
  title: string | null;
  subtitle: string | null;
  imageUrl: string | null;
  ctaUrl: string | null;
  ctaCopy: string | null;
}

export interface UIQuery_getUI_sections_section_ProductCard {
  __typename: "ProductCard";
  items: (UIQuery_getUI_sections_section_ProductCard_items | null)[] | null;
}

export interface UIQuery_getUI_sections_section_ListMenu_items {
  __typename: "ListMenuItem";
  title: string | null;
  url: string | null;
  divider: boolean | null;
}

export interface UIQuery_getUI_sections_section_ListMenu {
  __typename: "ListMenu";
  title: string | null;
  items: (UIQuery_getUI_sections_section_ListMenu_items | null)[] | null;
}

export type UIQuery_getUI_sections_section = UIQuery_getUI_sections_section_Title | UIQuery_getUI_sections_section_Banner | UIQuery_getUI_sections_section_ProductCard | UIQuery_getUI_sections_section_ListMenu;

export interface UIQuery_getUI_sections {
  __typename: "SectionContainer";
  id: string | null;
  sectionComponentType: string | null;
  section: UIQuery_getUI_sections_section | null;
}

export interface UIQuery_getUI_layouts {
  __typename: "Layout";
  id: string | null;
  sectionIds: (string | null)[] | null;
}

export interface UIQuery_getUI {
  __typename: "UIResponse";
  sections: (UIQuery_getUI_sections | null)[] | null;
  layouts: (UIQuery_getUI_layouts | null)[] | null;
}

export interface UIQuery {
  getUI: UIQuery_getUI | null;
}
