import React from 'react';
import { TitleFragment } from './__generated__/TitleFragment';

type Props = Omit<TitleFragment, '__typename'>;

export default function Title({ title, subtitle }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </div>
  );
}
