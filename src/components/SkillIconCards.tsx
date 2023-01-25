import React, {createElement} from 'react'
import {Divider, Grid, Paper, Typography} from '@mui/material'
import {Box} from '@mui/system'
import {getKeyFromLabel} from '../utils/utils'
import {getDevIconSrc, getIcon} from '../utils/icons'

export type Skill = {title: string}
export type Category = {title: string; skills: Skill[]}
export type SkillIconCards = {categories: Category[]; backgroundColor: string}

const SkillIconCards = ({categories, backgroundColor}: SkillIconCards): JSX.Element => {
  const getMaxWidthCategory = (category: Category, extra: number) => `${category.skills.length * 160 + extra}px !important`

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

  const SkillIconCard = ({title}: {title: string}) => (
    <Box position='relative' sx={{width: {xs: 100, sm: 160}, height: {xs: 90, sm: 140}, ...grow}}>
      <Grid item container direction='column'>
        {getDevIconSrc(title) ? (
          <img alt={title} style={{height: 70, width: 'auto', zIndex: 2, paddingTop: 20}} src={getDevIconSrc(title)} />
        ) : (
          createElement(getIcon(title), {sx: {height: 70, width: 'auto', zIndex: 2, paddingTop: 0}})
        )}
        <Grid item sx={{py: {xs: 0.3, sm: 1}, px: 2}}>
          <Divider />
        </Grid>
        <Typography
          variant='h6'
          align='center'
          sx={{fontSize: {xs: 14, sm: 19}, lineHeight: {xs: 1, sm: 'unset'}, fontWeight: 600}}>
          {title}
        </Typography>
      </Grid>
    </Box>
  )

  return (
    <Grid item container xs={12}>
      {categories.map(category => (
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
              background: `linear-gradient(70deg, ${backgroundColor} 10%,  rgba(0, 0, 0, 0) 95%)`,
              width: 'fit-content',
            }}>
            <CategoryIconBackground Icon={getIcon(category.title)} />
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
