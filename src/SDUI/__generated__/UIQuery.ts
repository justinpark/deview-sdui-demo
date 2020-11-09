/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UIQuery
// ====================================================

export interface UIQuery_getUI_sections_section_Title {
  __typename: "Title";
  title: string | null;
  subtitle: string | null;
}

export interface UIQuery_getUI_sections_section_Banner {
  __typename: "Banner";
  icon: string | null;
  title: string | null;
  subtitle: string | null;
  ctaUrl: string | null;
  ctaCopy: string | null;
}

export type UIQuery_getUI_sections_section = UIQuery_getUI_sections_section_Title | UIQuery_getUI_sections_section_Banner;

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
