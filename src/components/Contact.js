import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(({
  item: {
    paddingTop: 64,
  }
}));

function Contact() {
  const { item } = useStyles();
  return (
    <Grid id="contact" container
      direction="column"
    >
      <Grid item
        className={item}
      >
        <Typography variant="h4" component="h2">
          Contact
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          You can find me here
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Contact
