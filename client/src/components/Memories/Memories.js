import React from "react";
import { Memory } from "./Memory/Memory";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";

export const Memories = ({setCurrentId}) => {
  const memories = useSelector((state) => state.memories);
  const classes = useStyles();

  return !memories.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {memories.map((memory) => (
        <Grid key={memory._id} item xs={12} sm={6}>
          <Memory memory={memory} setCurrentId={ setCurrentId}/>
        </Grid>
      ))}
    </Grid>
  );
};
