import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ETA from '../assets/ETA.png';
import FTA from '../assets/FTA.png';
import GDF from '../assets/GDF.png';
import NT from '../assets/NT.png';
import WA from '../assets/WA.png';
import home from '../assets/home.png';

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    marginRight: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  media: {
    height: 400,
    width: 450,
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ backgroundColor: '#5cdb95', WebkitTextFillColor: '#053b6b' }}
    >
      <CardHeader title={props.title} />
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.alt}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.body}
        </Typography>
        <Typography component="h4">
          Link To Github: <a href={props.linkGit}>{props.linkGit}</a>
        </Typography>

        <Typography component="h4">
          Link To Deployed App: <a href={props.linkApp}>{props.linkApp}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
