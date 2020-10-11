import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'

import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core'
import {AppBar} from '@material-ui/core'
import {Tabs} from '@material-ui/core'
import {Tab} from '@material-ui/core'

import blueGrey from '@material-ui/core/colors/blueGrey'
import blue from '@material-ui/core/colors/blue'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800]
    },
    secondary: {
      main: blueGrey[600]
    }
  }
});

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <AppBar position="static" color="primary">
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Home"/>
                <Tab label="BanBot"/>
                <Tab label="Guide"/>
                <Tab label="About"/>
              </Tabs>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <Box mt={5}>
              <Typography variant="h2">
                Welcome to BanBot!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box my={4}>
              <Typography variant="body1">
                BanBot is an application that helps you ban champions during
                a clash tournament.  Simply input the summoner names, and BanBot
                will do the rest!  Our advanced algorithms analyze what champions
                each summoner will likely play and which champions they are likely to
                perform well with.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
