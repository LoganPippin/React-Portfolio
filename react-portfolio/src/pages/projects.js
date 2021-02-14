import { theme } from '../components/navbar';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Code, Computer } from '@material-ui/icons';
import ProjectCard from '../components/projectCard';
import projects from '../projects.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(50),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#053b6b',
    marginTop: theme.spacing(10),
  },
  paperSecondary: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#5cdb95',
    backgroundColor: '#053b6b',
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(0),
  },
  barPrimary: {
    padding: theme.spacing(10),
    backgroundColor: '#5cdb95',
    marginTop: theme.spacing(50),
  },
  barSecondary: {
    padding: theme.spacing(10),
    backgroundColor: '#053b6b',
  },
}));

function Project() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <h1 className={classes.paper}>
              <Code fontSize="large" style={{ color: '#5cdb95' }} />
              Recent Projects I Have Worked On
              <Computer fontSize="large" style={{ color: '#5cdb95' }} />
            </h1>
          </Grid>
        </Grid>

        <Grid container justify="center" className={classes.barSecondary}>
          {projects.map((item) => (
            <ProjectCard
              id={item.id}
              key={item.id}
              title={item.title}
              img={item.img}
              alt={item.alt}
              body={item.body}
              linkGit={item.linkGit}
              linkApp={item.linkApp}
            />
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Project;
