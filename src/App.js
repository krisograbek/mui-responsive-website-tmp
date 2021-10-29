import Button from '@mui/material/Button';
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
  },
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
  }
});

function App() {
  const [themeMode, setThemeMode] = useState(lightTheme);
  const theme = themeMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} square={true}>
        <header className="App-header">
          <Typography variant="h2" color="primary">
            Hi, I'm Kris
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Learning is my passion
          </Typography>
          <Typography variant="subtitle2" color="primary">
            I love programming
          </Typography>
          <Button onClick={() => setThemeMode(!themeMode)} color="primary" variant="outlined">Click me</Button>
        </header>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
