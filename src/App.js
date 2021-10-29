import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import './App.css';


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

function App() {
  const [themeMode, setThemeMode] = useState(lightTheme);
  const theme = themeMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} square={true}>
        <header className="App-header">
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
          <Button onClick={() => setThemeMode(!themeMode)} color="primary" variant="outlined">Click me</Button>
        </header>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
