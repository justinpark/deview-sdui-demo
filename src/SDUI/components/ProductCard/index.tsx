import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from './Card';

import { ProductCardFragment } from "./__generated__/ProductCardFragment";

type Props = Omit<ProductCardFragment, "__typename">;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  item: {
    width: 350,
    margin: 10,
  },
}));

export default function ProductCard({
  items
}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {items?.map((item) => item && (
        <div key={`${item?.title}`} className={classes.item}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
}
