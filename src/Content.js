import { Grid, Typography } from '@mui/material'
import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Projects'

function Content() {
  return (
    <Grid item>
      <About />
      <Projects />
      <Blog />
      <Contact />
    </Grid>
  )
}

export default Content
