import Brightness3Outlined from '@mui/icons-material/Brightness3Outlined';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import './App.css';
import { Container, Grid } from '@mui/material';


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
      <Container>
        <Paper className={classes.root} elevation={0} square={true}>
          <Grid
            container
            direction="column"
          >
            <Grid item>
              <Typography variant="h4">
                Hi, I am an important information
              </Typography>
              <Typography variant="subtitle1">
                I am a body text. You'll see me all over the place
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                I am also important
              </Typography>
              <Typography variant="subtitle1" color="primary">
                You can click me
              </Typography>
            </Grid>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
