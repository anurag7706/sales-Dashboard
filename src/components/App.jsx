import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {NavBar, MainPage} from '.'

import useStyles from './styles.js';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <NavBar/>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App