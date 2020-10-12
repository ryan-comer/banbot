import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core'
import {AppBar} from '@material-ui/core'
import {Tabs, Tab} from '@material-ui/core'
import {TabPanel, TabContext} from '@material-ui/lab'

import blueGrey from '@material-ui/core/colors/blueGrey'
import blue from '@material-ui/core/colors/blue'

import Home from './views/HomeView'
import BanBot from './views/BanBot'
import Guide from './views/Guide'

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
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <AppBar position="static" color="primary">
            <Tabs value={value} onChange={handleChange} aria-label="scrollable auto tabs example">
              <Tab label="Home" value="1"/>
              <Tab label="BanBot" value="2"/>
              <Tab label="Guide" value="3"/>
            </Tabs>
          </AppBar>
          <TabPanel value="1">
            <Home/>
          </TabPanel>
          <TabPanel value="2">
            <BanBot/>
          </TabPanel>
          <TabPanel value="3">
            <Guide/>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </div>
  );
}

export default App;
