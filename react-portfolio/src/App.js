import logo from './logo.svg';
import { SearchAppBar, theme } from './components/navbar';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Code, Computer } from '@material-ui/icons';
import img from './assets/profile.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(50),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#053b6b',
  },
  paperSecondary: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#5cdb95',
    backgroundColor: '#053b6b',
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(0),
  },
  icon: {
    padding: theme.spacing(4),
    color: '#5cdb95',
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

function App() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <h1 className={classes.paper}>
              <Code fontSize="large" className={classes.icon} />
              Full-Stack Web Developer / Software Engineer.
              <Computer fontSize="large" className={classes.icon} />
            </h1>
          </Grid>
        </Grid>

        <h1 className={classes.paperSecondary}>Hello, I'm Logan</h1>

        <Grid container className={classes.barSecondary}>
          <Grid>
            <img
              src={img}
              alt="profile"
              style={{ width: 350, height: 400 }}
            ></img>
          </Grid>
          <Grid item xs={10} style={{ marginLeft: theme.spacing(8) }}>
            <p
              className={classes.paperSecondary}
              style={{ fontSize: '1.5rem', textAlign: 'left' }}
            >
              I am a new Software Engineer and Web Developer and am on track to
              graduate from KU and Trillogy's full-stack web development coding
              boot camp course on March 4, 2021.
            </p>
          </Grid>
        </Grid>

        <Grid container className={classes.barPrimary}>
          <Grid item xs={12}>
            <h1 className={classes.paper}>Skills and Technologies</h1>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
