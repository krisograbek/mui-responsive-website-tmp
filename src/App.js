import Brightness3Outlined from '@mui/icons-material/Brightness3Outlined';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';


const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#00958b',
      main: '#00796d',
      dark: '#004d40',
      contrastText: '#fff',
    },
    text: {
      primary: grey[700],
      secondary: '#000'
    }
  },
  typography: {
    h4: {
      color: '#000'
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#a9dfdd',
      main: '#6ccbc7',
      dark: '#00a69e',
      contrastText: '#fff',
    },
    text: {
      primary: grey[400],
      secondary: '#fff'
    }
  },
  typography: {
    h4: {
      color: '#fff'
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: 20
  }
}));

function App() {
  const classes = useStyles();
  const [themeMode, setThemeMode] = useState(true);
  const theme = themeMode ? darkTheme : lightTheme;
  const Icon = themeMode ? WbSunnyOutlined : Brightness3Outlined;

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} elevation={0} square={true}>
        <Grid
          container
          direction="column"
        >
          <Header />
          <Content />
          <Grid item>
            <IconButton
              edge="end"
              color="primary"
              size="small"
              aria-label="mode"
              onClick={() => setThemeMode(!themeMode)}
            >
              <Icon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
