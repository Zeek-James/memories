import "./App.css";
import { Form } from "./components/Form/Form";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles";

import memories from "./images/pexels-leah-kelley-185933.jpg";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMemories } from "./actions/memories";
import { Memories } from "./components/Memories/Memories";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getMemories());
  }, [currentId, dispatch]);

   return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.images}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
           <Grid
             className={classes.mainContainer}
            container
            justify="space-between"
             alignItems="stretch"
             
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Memories setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={ currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
