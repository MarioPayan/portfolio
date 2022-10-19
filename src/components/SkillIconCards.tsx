import React from 'react'
import {Divider, Grid, Paper, Typography, useTheme} from '@mui/material'
import {Box} from '@mui/system'
import {getDevIconURL, getKeyFromLabel} from '../utils/utils'

const SkillIconCards = ({
  skills,
}: {
  skills: {title: string; icon: any; skills: {title: string; imageUrl: string}[]}[]
}) => {
  const theme = useTheme()

  const getMaxWidthCategory = (category: any, extra: number) => `${category.skills.length * 160 + extra}px !important`

  const grow = {
    transition: 'transform .5s, box-shadow 1s',
    '&:hover': {
      transform: 'scale(1.2) perspective(0px)',
    },
  }

  const CategoryIconBackground = ({Icon}: {Icon: any}) => (
    <Box
      display='flex'
      position='absolute'
      justifyContent='flex-end'
      height={1}
      width={1}
      zIndex={1}
      sx={{backgroundColor: 'rgba(0,0,0,0.05)', filter: 'blur(1px)', overflow: 'hidden'}}>
      <Icon sx={{height: 1, width: 'auto', opacity: 0.1, right: 0, mr: -5}} />
    </Box>
  )

  const SkillIconCard = ({title, imageUrl}: {title: string; imageUrl: string}) => (
    <Box position='relative' sx={{width: 160, height: 140, ...grow}}>
      <Grid item container direction='column' sx={{}}>
        <img alt={title} style={{height: 70, width: 'auto', zIndex: 2, paddingTop: 20}} src={getDevIconURL(imageUrl)} />
        <Grid item sx={{py: 1, px: 2}}>
          <Divider />
        </Grid>

        <Typography variant='h6' align='center' sx={{fontSize: 19, fontWeight: 600}}>
          {title}
        </Typography>
      </Grid>
    </Box>
  )

  return (
    <Grid item container xs={12}>
      {skills.map(category => (
        <Grid
          item
          container
          position='relative'
          key={getKeyFromLabel(category.title)}
          sx={{
            m: 2,
            maxWidth: getMaxWidthCategory(category, 100),
          }}>
          <Paper
            elevation={5}
            sx={{
              borderRadius: 4,
              backgroundColor: theme.palette.primary.dark, // rgb(0, 108, 156) rgb(0, 123, 85)
              width: 'fit-content',
            }}>
            <CategoryIconBackground Icon={category.icon} />
            <Grid item container padding={2}>
              <Typography variant='h5' sx={{color: 'white', fontWeight: 700}}>
                {category.title}
              </Typography>

              <Grid item container xs={12} sx={{maxWidth: getMaxWidthCategory(category, 100)}}>
                {category.skills.map(skill => (
                  <Grid item key={getKeyFromLabel(skill.title)}>
                    <SkillIconCard {...{...skill}} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}
export default SkillIconCards