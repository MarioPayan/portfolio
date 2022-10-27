import React, {createElement} from 'react'
import {
  Avatar as AvatarMUI,
  Card,
  CardActions,
  CardMedia,
  Collapse,
  Fade,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography
} from '@mui/material'
import {Box} from '@mui/system'
import {SECTIONS, SOCIAL_LIST} from '../API/data'
import {getAssetURL, getKeyFromLabel, openInNewTab} from '../utils/utils'
import {getIcon} from '../utils/icons'

export type Content = {Avatar: JSX.Element; subtitle: string}
export type SetSection = (section: string) => void
export type LandingCard = {section: string; setSection: SetSection; chill: boolean}

const LandingCard = ({section, setSection, chill}: LandingCard): JSX.Element => {
  const MainCardIconButton = ({label, url, Icon}: {label: string; url: string; Icon: any}): JSX.Element => (
    <IconButton aria-label={label} sx={{color: 'whitesmoke'}} onClick={() => openInNewTab(url)}>
      <Icon fontSize='large' />
    </IconButton>
  )

  const avatarCommonProps = {
    alt: 'Mario Payan',
    sx: {
      width: {xs: 140, sm: 200},
      mt: 2,
      height: 'auto',
      borderStyle: 'solid',
      borderColor: 'whitesmoke',
    },
  }

  const Content = ({Avatar, subtitle}: Content) => (
    <Grid item container xs={12} spacing={2} sx={{position: 'absolute', zIndex: 2, height: 1, pl: 4, pr: 1, pb: 1}}>
      <Grid item container direction='column' xs={12} sm='auto' justifyContent='flex-end' alignContent='center'>
        {Avatar}
      </Grid>
      <Grid
        item
        container
        direction='column'
        xs='auto'
        justifyContent='flex-end'
        alignContent='center'
        sx={{height: {xs: 'auto', sm: 1}, width: {xs: 1, sm: 'auto'}, pb: 5}}>
        <Typography
          variant='h4'
          color='whitesmoke'
          sx={{
            fontWeight: 700,
            lineHeight: '1.5',
            maxWidth: 210,
            display: 'flex',
          }}>
          Mario Payan
        </Typography>
        <Typography variant='h5' color='whitesmoke' sx={{display: {xs: 'none', md: 'flex'}}}>
          {subtitle}
        </Typography>
      </Grid>

      <Grid item container justifyContent='flex-end' xs sx={{mt: 1, ml: 1, display: {xs: 'none', md: 'flex'}}}>
        <Stack direction='row' spacing={1} flexWrap='wrap' justifyContent='right' sx={{minWidth: 150}}>
          {SOCIAL_LIST.map(social => (
            <Collapse in={chill === social.chill} orientation='horizontal' key={getKeyFromLabel(social.label)}>
              <MainCardIconButton {...social} Icon={getIcon(social.label)} />
            </Collapse>
          ))}
        </Stack>
      </Grid>
    </Grid>
  )

  return (
    <Card sx={{position: 'relative', borderRadius: 4}}>
      <Fade in={!chill}>
        {Content({
          Avatar: <AvatarMUI src={getAssetURL('images/profile.jpg')} variant='circular' {...avatarCommonProps} />,
          subtitle: 'Full Stack Engineer ● Tech Lead Developer',
        })}
      </Fade>

      <Fade in={chill}>
        {Content({
          Avatar: <AvatarMUI src={getAssetURL('images/profile_pixel.png')} variant='circular' {...avatarCommonProps} />,
          subtitle: '¯\\_(ツ)_/¯',
        })}
      </Fade>

      <Grid item container xs={12} sx={{height: 1, position: 'relative'}}>
        <Box
          sx={{
            position: 'absolute',
            height: 1,
            width: 1,
            zIndex: 1,
            backgroundColor: 'rgba(0,60,0,0.4)',
            filter: 'blur(8px)',
          }}/>
        <CardMedia
          component='img'
          height={220}
          image={getAssetURL('images/cover.jpg')}
          alt='Cover'
          sx={{filter: 'blur(4px)'}}/>
      </Grid>

      <CardActions sx={{padding: 0}}>
        <Grid item container justifyContent='flex-end'>
          <Tabs
            sx={{zIndex: 2, height: 60, pl: {sm: 22, xs: 0}}}
            allowScrollButtonsMobile
            variant='scrollable'
            scrollButtons='auto'
            value={section}
            onChange={(event, newValue) => setSection(newValue)}>
            {SECTIONS.map(tab => (
              <Tab
                disableRipple
                key={getKeyFromLabel(tab.label)}
                value={getKeyFromLabel(tab.label)}
                label={
                  <Typography
                    textTransform='none'
                    sx={{fontSize: 18, fontWeight: 700, display: {xs: 'none', md: 'flex'}}}>
                    {tab.label}
                  </Typography>
                }
                icon={createElement(getIcon(tab.label), {})}
                iconPosition='start'
                sx={{fontWeight: 800, px: 2}}/>
            ))}
          </Tabs>
        </Grid>
      </CardActions>
    </Card>
  )
}
export default LandingCard
