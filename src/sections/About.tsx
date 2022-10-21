import React from 'react'
import {Paper, Typography} from '@mui/material'
import UnderConstruction from '../components/UnderConstruction'

const About = () => {
  return (
    <>
      <Paper elevation={5}>
        <Typography variant='h1'>Hey! I&apos;m Mario Payan</Typography>
        <Typography variant='h4'>
          A Fullstack developer with focus on software development, algorithms design, software as a service and clean
          code. Challenge driven, always willing to learn, passionate about new technologies, teamwork and code writing
        </Typography>
      </Paper>
      <UnderConstruction />
    </>
  )
}

export default About
