import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

import { ProductCardFragment } from './__generated__/ProductCardFragment';

type Props = Omit<ProductCardFragment, '__typename'>;

const useStyles = makeStyles(() => ({
  item: {
    width: 350,
    margin: 10,
  },
}));

export default function ProductCard({ items }: Props) {
  const classes = useStyles();

  return (
    <Grid container>
      {items?.map(
        (item) =>
          item && (
            <div key={`${item?.title}`} className={classes.item}>
              <Card {...item} />
            </div>
          )
      )}
    </Grid>
  );
}
