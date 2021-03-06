import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { useEffect, useState } from 'react';

// dispatch an action
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

function App() {
  const [curId, setCurId] = useState(null);
  const classes = useStyles();

  // it is able call async API call
  const dispatch = useDispatch();

  // call get post function as component reload
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, curId]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="" height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" specing={3}>

            <Grid item xs={12} sm={7}>
              <Posts setCurId={setCurId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form curId={curId} setCurId={setCurId} />
            </Grid>

          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
