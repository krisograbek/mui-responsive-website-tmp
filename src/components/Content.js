import { Grid, Typography } from '@mui/material'
import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Projects'

function Content() {
  return (
    <Grid
      item
      id="home"
      style={{
        paddingTop: 32
      }}
    >
      <Grid container>
        <Grid item>
          <About />
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
        <Grid item>
          <Blog />
        </Grid>
        <Grid item>
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Content
