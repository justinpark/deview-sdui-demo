import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

import { ProductCardFragment_items } from "./__generated__/ProductCardFragment";

type Props = Omit<ProductCardFragment_items, '__typename'>;

const useStyles = makeStyles(() => ({
  media: {
    height: 150,
  },
}));

export default function ProductCard({
  title,
  subtitle,
  imageUrl,
  ctaCopy,
  ctaUrl,
}: Props) {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      {imageUrl && (
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
      )}
      <CardContent>
        <Typography variant="body1">{title}</Typography>
        {subtitle && (
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>

      {ctaCopy && ctaUrl && (
        <CardActions>
          <Button href={ctaUrl} variant="contained" disableElevation>
            {ctaCopy}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
