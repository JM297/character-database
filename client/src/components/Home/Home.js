import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 
import Characters from '../Characters/Characters';
import Form from '../Form/Form';

import { getPosts } from '../../redux/actions/posts';

import useStyles from '../../styles';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Character Database</Typography>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>

            <Grid item xs={12} sm={7}>
              <Characters setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default Home;