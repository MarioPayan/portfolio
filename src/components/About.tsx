import React from 'react'
import {Grid, IconButton, Paper, Typography} from '@mui/material'
import DATA from '../API/data'
import {getKeyFromLabel, openInNewTab} from '../utils/utils'
import {getIcon} from '../utils/icons'
import {Mode} from '../utils/types'

const About = ({mode}: {mode: Mode}): JSX.Element => {
  const CardItem = ({children}: {children: any}) => (
    <Grid item xs>
      <Paper elevation={5}>
        <Grid item container padding={3}>
          {children}
        </Grid>
      </Paper>
    </Grid>
  )

  const Title = ({label}: {label: string}) => (
    <Typography variant='h5' paddingBottom={2}>
      {label}
    </Typography>
  )

  const Social = ({label, url, Icon}: {label: string; url: string; Icon: any}): JSX.Element => (
    <IconButton aria-label={label} sx={{color: 'whitesmoke'}} onClick={() => openInNewTab(url)}>
      <Icon fontSize='large' />
      <Typography>{label}</Typography>
    </IconButton>
  )
  return (
    <Grid item container xs={12} spacing={3}>
      <CardItem>
        <Grid item xs={12}>
          <Title label='Hey!' />
          <Typography>I&apos;m Mario Payan</Typography>
        </Grid>
      </CardItem>
      <CardItem>
        <Grid item xs={12}>
          <Title label="I'm a" />
          <Typography>Software Developer</Typography>
          <Typography>Full Stack Engineer</Typography>
          <Typography>Tech Lead</Typography>
        </Grid>
      </CardItem>
      <CardItem>
        <Grid item xs={12}>
          <Title label='About' />
          <Typography>
            A Fullstack developer with focus on software development, algorithms design, software as a service and clean
            code. Challenge driven, always willing to learn, passionate about new technologies, teamwork and code
            writing
          </Typography>
        </Grid>
      </CardItem>
      <CardItem>
        <Grid item xs={12}>
          <Title label='From' />
          <Typography>Colombia</Typography>
        </Grid>
      </CardItem>
      <CardItem>
        <Grid item xs={12}>
          <Title label='Social' />
          {DATA.SOCIAL_LIST.map(
            social => social.mode === mode && (
              <Social {...social} Icon={getIcon(social.label)} key={getKeyFromLabel(social.label)} />
            )
          )}
        </Grid>
      </CardItem>
    </Grid>
  )
}

export default About
