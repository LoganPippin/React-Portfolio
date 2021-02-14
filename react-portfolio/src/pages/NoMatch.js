import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function NoMatch() {
  return (
    <Container fluid>
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NoMatch;
