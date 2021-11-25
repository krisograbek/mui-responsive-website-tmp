import grey from '@mui/material/colors/grey';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


const applyCommonTheme = theme => createTheme(theme, {
  typography: {
    h4: {
      color: theme.palette.text.secondary
    },
    h2Big: {
      color: theme.palette.text.secondary,
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 900,
    },
    h3Big: {
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 700,
    },
    spanBold: {
      color: theme.palette.text.secondary,
      fontWeight: 600
    },
  }
});

const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#00958b',
      main: '#00796d',
      dark: '#004d40',
    },
    text: {
      primary: grey[700],
      secondary: '#000'
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#a9dfdd',
      main: '#6ccbc7',
      dark: '#00a69e',
    },
    text: {
      primary: grey[400],
      secondary: '#fff'
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    // padding: 20
  }
}));

function App() {
  const classes = useStyles();
  const [themeMode, setThemeMode] = useState(true);
  let theme = themeMode ? darkTheme : lightTheme;
  theme = applyCommonTheme(theme);
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} elevation={0} square={true}>
        <Grid
          container
          direction="column"
        >
          <Header setThemeMode={setThemeMode} themeMode={themeMode} />
          <Container maxWidth="lg">
            <Content />
          </Container>
          <Grid id="footer" container>
            <Footer />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
