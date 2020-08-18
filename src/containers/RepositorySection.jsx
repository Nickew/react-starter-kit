import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import RepositoryList from './RepositoryList';

const useStyles = makeStyles(() => ({
  heading: {
    textAlign: 'center',
  },
}));

const RepositorySection = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid className={classes.heading} item xs={12}>
          <Typography variant="h3" component="h1">
            My github repositories
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RepositoryList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RepositorySection;
