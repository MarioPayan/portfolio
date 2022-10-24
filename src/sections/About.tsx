import React from 'react'
import {Grid, Paper, Typography} from '@mui/material'

const About = (): JSX.Element => {
  return (
    <>
      <Paper elevation={5}>
        <Grid item container padding={5}>
          <Grid item xs={8}>
            <Typography variant='h3'>Hey!</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h3'>I&apos;m Mario Payan</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={5}>
        <Grid item container padding={5}>
          <Grid item xs={8}>
            <Typography variant='h5'>
              A Fullstack developer with focus on software development, algorithms design, software as a service and
              clean code. Challenge driven, always willing to learn, passionate about new technologies, teamwork and
              code writing
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default About
