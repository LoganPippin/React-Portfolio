import { theme } from '../components/navbar';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Code, Computer } from '@material-ui/icons';
import img from '../assets/profile.jpg';
import { Container } from '@material-ui/core';
import Card from '../components/card';

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

function Home() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <h1 className={classes.paper}>
              <Code fontSize="large" style={{ color: '#5cdb95' }} />
              Full-Stack Web Developer / Software Engineer.
              <Computer fontSize="large" style={{ color: '#5cdb95' }} />
            </h1>
          </Grid>
        </Grid>

        <h1 className={classes.paperSecondary}>Hello, I'm Logan</h1>

        <Grid container className={classes.barSecondary}>
          <Container maxWidth="xs">
            <img
              src={img}
              alt="profile"
              style={{ width: 350, height: 400 }}
            ></img>
          </Container>

          <Grid item xs={8}>
            <p
              className={classes.paperSecondary}
              style={{ fontSize: '1.5rem', textAlign: 'left' }}
            >
              I am a new Software Engineer and Web Developer and graduate from
              KU and Trillogy's full-stack web development coding boot camp
              course. I am a life long learner and very passionate about coding
              and can't wait to get to work on more projects. If you are
              interested in hiring me you can click the link below to look at my
              résumé.
            </p>
            <Grid item={5}>
              <p
                className={classes.paperSecondary}
                style={{ textAlign: 'left' }}
              >
                Link To résumé :
              </p>
              <a
                style={{ WebkitTextFillColor: '#5cdb95', textAlign: 'center' }}
                href="https://docs.google.com/document/d/1yQJz_xFNh86-NB70xVwOQYXWnnKCTLEu1V7XIdbdCdM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://docs.google.com/document/d/1yQJz_xFNh86-NB70xVwOQYXWnnKCTLEu1V7XIdbdCdM/edit?usp=sharing
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid justify="center" container className={classes.barPrimary}>
          <Grid item xs={12}>
            <h1 className={classes.paper}>Skills and Technologies</h1>
          </Grid>
          <Grid item xs={2}>
            <Card
              cardTitle="Software Skills"
              firstTitle="Technologies I Use: "
              firstInfo="Node.js, Express.js, MySQL, MongoDB"
              secondTitle="Dev Tools"
              secondInfo="Sequelize, Mongoose, & Postman"
            />
          </Grid>
          <Grid item xs={2} style={{ marginLeft: theme.spacing(10) }}>
            <Card
              cardTitle="Web Development Skills"
              firstTitle="Languages: "
              firstInfo="CSS3, HTML5, JavaScript, React"
              secondTitle="Dev Tools"
              secondInfo="Bootstrap, Materialize, VSCode, Github, Terminal"
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Home;
