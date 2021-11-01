import { Grid, Link, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(isMobile)

  return (
    <Grid item>
      <Grid container>
        <Grid item xs={3}>
          LOGO
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
          >
            <Grid item><Link href="#about">About</Link></Grid>
            <Grid item><Link href="#projects">Projects</Link></Grid>
            <Grid item><Link href="#blog">Blog</Link></Grid>
            <Grid item><Link href="#contact">Contact</Link></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header
