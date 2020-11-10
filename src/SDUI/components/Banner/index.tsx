import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { BannerFragment } from "./__generated__/BannerFragment";

type Props = Omit<BannerFragment, "__typename">;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Banner({ title, subtitle, ctaCopy }: Props) {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardContent className={classes.root}>
        <div>
          <Typography variant="body1">{title}</Typography>
          {subtitle && (
            <Typography variant="body2" color="textSecondary">
              {subtitle}
            </Typography>
          )}
        </div>
        {ctaCopy && (
          <Button variant="contained" disableElevation>
            {ctaCopy}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
