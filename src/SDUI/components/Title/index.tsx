import React from "react";
import { Typography } from "@material-ui/core";
import { TitleFragment } from "./__generated__/TitleFragment";

type Props = Omit<TitleFragment, "__typename">;

export default function Title({ title, subtitle }: Props) {
  return (
    <div>
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" component="h3" color="textSecondary">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
