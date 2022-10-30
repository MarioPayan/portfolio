import React, {useState} from 'react'
import {CardActionArea, CardMedia, Grid, Paper, Typography} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import SocialIconButton from './SocialIconButton'
import {getIcon} from '../utils/icons'

export type ImagesCard = {title: string; description: string; images: string[]; onImage: any; social?: any}

const ImagesCard = ({title, description, images, onImage, social = {}}: ImagesCard) => {
  const carouselSettings: any = {
    autoPlay: true,
    animation: 'fade' as 'slide' | 'fade',
    indicators: false,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
  }

  const cardImageProperties: React.CSSProperties = {
    width: 1,
    height: 1,
    borderRadius: 1,
    border: 'solid',
    color: 'whitesmoke',
  }

  return (
    <Grid item xs={12} md={12} lg={6} xl={4}>
      <Paper elevation={5}>
        <Grid item container xs={12} padding={3}>
          <Grid item container xs={12} sm={6} alignContent='space-between'>
            <Grid item container alignContent='flex-start'>
              <Grid item xs={12}>
                <Typography variant='h2' paddingBottom={2} sx={{wordBreak: 'break-word'}}>
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{description}</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} justifyContent='flex-end' paddingRight={2}>
              {social.youtube && <SocialIconButton label='Youtube' url={social.youtube} Icon={getIcon('Youtube')} />}
              {social.facebook && (
                <SocialIconButton label='Facebook' url={social.facebook} Icon={getIcon('Facebook')} />
              )}
              {social.instagram && (
                <SocialIconButton label='Youtube' url={social.instagram} Icon={getIcon('Instagram')} />
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Carousel {...carouselSettings}>
              {images.map(image => (
                <Grid item xs={12} key={image}>
                  <CardActionArea onClick={() => onImage(image)} sx={{width: 1, height: 400}}>
                    <CardMedia image={image} title={title} sx={cardImageProperties}></CardMedia>
                  </CardActionArea>
                </Grid>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default ImagesCard
