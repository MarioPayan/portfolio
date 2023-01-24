import React from 'react'
import {Grid, Card, CardContent, CardActionArea, CardMedia, Typography, useTheme} from '@mui/material'
import {getAssetURL, sectionTitle} from '../utils/utils'
import DATA, {KEYS} from '../API/data'

export type AboutBusiness = {setSection: (section: string) => void}
export type CardItem = {text: string; image: string; section: string; content: JSX.Element}

const AboutBusiness = ({setSection}: AboutBusiness): JSX.Element => {
  sectionTitle(KEYS.ABOUT_ME_BUSINESS)
  const theme = useTheme()

  const CardItem = ({text, image, content, section}: CardItem): JSX.Element => (
    <Card
      sx={{
        width: 1,
        maxWidth: {lg: '70vw', md: 1},
        borderRadius: 8,
        border: 'solid',
        borderWidth: 1,
        color: 'rgba(255,255,255,0.7)',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 10%,  rgba(0, 0, 0, 1) 95%)`,
      }}>
      <CardActionArea onClick={() => section && setSection(section)} sx={{p: 5}}>
        <Grid item container>
          <Grid item xs={1}>
            <Typography sx={{writingMode: 'vertical-lr', transform: 'rotate(180deg)'}}>{text}</Typography>
          </Grid>
          <Grid item xs={5} sx={{px: 5}}>
            <CardMedia
              component='img'
              width='100%'
              image={image}
              sx={{objectFit: 'contain', borderRadius: 10}}
              alt={DATA.PERSONAL.name}/>
          </Grid>
          <Grid item xs={6}>
            <CardContent>{content}</CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )

  const Title = ({label}: {label: string}) => (
    <Typography variant='h5' paddingBottom={2}>
      {label}
    </Typography>
  )

  return (
    <Grid item container xs={12} spacing={4}>
      <Grid item container xs={12} justifyContent='center'>
        <CardItem
          text={DATA.PERSONAL.name}
          section={KEYS.ABOUT_ME_BUSINESS}
          image={getAssetURL('images/profile_LQ.jpg')}
          content={
            <>
              <Title label={`Hey! I'm ${DATA.PERSONAL.name}`} />
              <Typography>{DATA.PERSONAL.description.BUSINESS}</Typography>
            </>
          }/>
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <CardItem
          text='Skills'
          section={KEYS.SKILLS}
          image={getAssetURL('images/profile_LQ.jpg')}
          content={
            <>
              <Title label='Skills' />
              <Typography>TODO: </Typography>
            </>
          }/>
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <CardItem
          text='Experience'
          section={KEYS.EXPERIENCE}
          image={getAssetURL('images/profile_LQ.jpg')}
          content={
            <>
              <Title label='Experience' />
              <Typography>TODO: </Typography>
            </>
          }/>
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <CardItem
          text='Projects'
          section={KEYS.PROJECTS}
          image={getAssetURL('images/profile_LQ.jpg')}
          content={
            <>
              <Title label='Projects' />
              <Typography>TODO: </Typography>
            </>
          }/>
      </Grid>
      <Grid item container xs={12} justifyContent='center'>
        <CardItem
          text='Education'
          section={KEYS.EDUCATION}
          image={getAssetURL('images/profile_LQ.jpg')}
          content={
            <>
              <Title label='Education' />
              <Typography>TODO: </Typography>
            </>
          }/>
      </Grid>
    </Grid>
  )
}
export default AboutBusiness
