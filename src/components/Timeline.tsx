import React from 'react'
import {
  Timeline as TimelineMUI,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses
} from '@mui/lab'
import {Box, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material'
import {KeyboardDoubleArrowRight} from '@mui/icons-material'
import {getKeyFromLabel} from '../utils/utils'

const Timeline = ({items, colors, BulletIcon}: {items: any; colors: any; BulletIcon: any}) => {
  const sortFrom = (a: any, b: any): number => {
    return new Date(b.from).getTime() - new Date(a.from).getTime()
  }

  const leftAlignTimeline = {
    pl: 5,
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
  }

  const DownText = ({text}: {text: string}) => <span style={{opacity: '0.7'}}>{text}</span>

  const changeDateFormat = (date: string) => {
    const [year, month] = date.split('-')

    return `${new Date(parseInt(year), parseInt(month) - 1).toLocaleString('en-US', {month: 'short'} as any)} ${year}`
  }

  const dateDiff = (dateA: string, dateB: string): string => {
    const getTime = (date: string): number => (date ? new Date(date).getTime() : new Date().getTime())
    const daysDiff = Math.floor((getTime(dateB) - getTime(dateA)) / (1000 * 60 * 60 * 24))
    let timeDiff = 'Just started'
    const years = Math.floor(daysDiff / 365)
    const yearsDiff = years >= 1 ? `${years} ${years === 1 ? 'year' : 'years'}` : ''
    const months = Math.floor(daysDiff / 30) % 12
    const monthsDiff = months >= 1 ? `${months} ${months === 1 ? 'month' : 'months'}` : ''
    if (yearsDiff && monthsDiff) timeDiff = `${yearsDiff}, ${monthsDiff}`
    else if (yearsDiff || monthsDiff) timeDiff = `${yearsDiff}${monthsDiff}`
    return `(${timeDiff})`
  }

  return (
    <TimelineMUI sx={leftAlignTimeline}>
      {items.sort(sortFrom).map((item: any, i: number) => (
        <TimelineItem key={i}>
          <TimelineSeparator>
            <TimelineDot color='primary'>
              <BulletIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{position: 'relative'}}>
            <Box
              position='absolute'
              sx={{
                background: `linear-gradient(270deg, rgba(0,0,0,0) 20%, ${colors[getKeyFromLabel(item.where)]} 100%)`,
                height: 1,
                width: 1,
                zIndex: -1,
                filter: 'blur(12px)',
              }}></Box>
            <Typography variant='h3' sx={{pl: 1, width: 'max-content'}}>
              {item.position}
              <Divider />
            </Typography>
            <Grid item container sx={{pl: 4, width: 'max-content'}}>
              <Grid item>
                <Typography variant='h4'>
                  <DownText text='At' /> {item.where}
                </Typography>
              </Grid>
              <Grid item display='flex'>
                <Typography variant='body1' alignSelf='flex-end' sx={{pl: 1, pb: 0.4}}>
                  <DownText text='from' /> {changeDateFormat(item.from)} <DownText text='to' />{' '}
                  {item.to ? changeDateFormat(item.to) : 'present'} {dateDiff(item.from, item.to)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
            <List dense>
              {item.achievements.map((achievement: any, i: number) => (
                <ListItem key={i}>
                  <ListItemIcon sx={{minWidth: 0, pr: 1}}>
                    <KeyboardDoubleArrowRight />
                  </ListItemIcon>
                  <ListItemText primary={<Typography>{achievement}</Typography>} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineMUI>
  )
}

export default Timeline
