import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Projects'
import ScrollTop from './ScrollTop'

const sections = [
  <About />,
  <Projects />,
  <Blog />,
]

function Content() {
  return (
    <Grid item px={1} pb={12}>
      <Grid container
        direction="column"
        alignContent="stretch">
        {sections.map((section) => {
          return (
            <Grid item
              pt={{ xs: 10, sm: 15, md: 20 }}
            >
              {section}
            </Grid>
          )
        })}
      </Grid>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Grid>
  )
}

export default Content
