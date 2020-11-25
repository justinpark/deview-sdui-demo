import React from 'react';
import { Typography } from '@material-ui/core';
import { TitleFragment } from './__generated__/TitleFragment';
import { TitleLevel } from '../../__generated__/globalTypes';

type Props = Omit<TitleFragment, '__typename'>;

const VariantMap = {
  [TitleLevel.XL]: {
    variant: 'h2' as const,
    component: 'h1' as const,
    subVariant: 'h5' as const,
  },
  [TitleLevel.LG]: {
    variant: 'h3' as const,
    component: 'h2' as const,
    subVariant: 'h5' as const,
  },
  [TitleLevel.MD]: {
    variant: 'h4' as const,
    component: 'h3' as const,
    subVariant: 'h5' as const,
  },
  [TitleLevel.SM]: {
    variant: 'h5' as const,
    component: 'h4' as const,
    subVariant: 'h6' as const,
  },
  [TitleLevel.XS]: {
    variant: 'h6' as const,
    component: 'h5' as const,
    subVariant: 'h6' as const,
  },
};

export default function Title({ title, subtitle, level }: Props) {
  const { variant, subVariant, component } = VariantMap[level || TitleLevel.LG];

  return (
    <div>
      <Typography variant={variant} component={component}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant={subVariant} color="textSecondary">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
