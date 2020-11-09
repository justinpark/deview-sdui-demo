import React from 'react';
import { BannerFragment } from './__generated__/BannerFragment';

type Props = Omit<BannerFragment, '__typename'>;

export default function Title({ title }: Props) {
  return (
    <div>
      {title}
    </div>
  );
}
