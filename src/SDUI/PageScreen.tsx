import React from "react";
import Grid from "@material-ui/core/Grid";

import Layout from "./Layout";

export default function PageScreen() {
  return (
    <Grid container>
      <Grid item md={9}>
        <Layout id="MAIN" />
      </Grid>
      <Grid item md={3}>
        <Layout id="SIDEBAR" />
      </Grid>
    </Grid>
  );
}
