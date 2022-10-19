import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses
} from '@mui/lab'
import {EXPERIENCE} from '../API/data'
import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material'
import {KeyboardDoubleArrowRight, Work} from '@mui/icons-material'
import {getKeyFromLabel} from '../utils/utils'

const Experience = () => {
  const sortFrom = (a: any, b: any): number => {
    return new Date(b.from).getTime() - new Date(a.from).getTime()
  }

  const dateDiff = (dateA: string, dateB: string): string => {
    const getTime = (date: string): number => (date ? new Date(date).getTime() : new Date().getTime())
    const daysDiff = Math.floor((getTime(dateB) - getTime(dateA)) / (1000 * 60 * 60 * 24))
    let timeDiff = 'Just started'
    const years = Math.floor(daysDiff / 365)
    const yearsDiff = years >= 1 ? `${years} ${years === 1 ? 'Year ' : 'Years'}` : ''
    const months = Math.ceil(daysDiff / 30) % 12
    const monthsDiff = months >= 1 ? `${months} ${months === 1 ? 'Month' : 'Months'}` : ''
    if (yearsDiff && monthsDiff) timeDiff = `${yearsDiff}, ${monthsDiff}`
    else if (yearsDiff || monthsDiff) timeDiff = `${yearsDiff}${monthsDiff}`
    return `(${timeDiff})`
  }

  const colors = {
    [getKeyFromLabel('Redux')]: 'rgba(9, 66, 156, 0.5)',
    [getKeyFromLabel('Alert Logic')]: 'rgba(254, 97, 22, 0.5)',
    [getKeyFromLabel('CIER-Sur')]: 'rgba(142, 36, 170, 0.5)',
  }

  return (
    <Timeline
      sx={{
        pl: 5,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
      {EXPERIENCE.sort(sortFrom).map((job, i) => (
        <TimelineItem key={i}>
          <TimelineSeparator>
            <TimelineDot color='primary'>
              <Work />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{position: 'relative'}}>
            <Box
              position='absolute'
              sx={{
                // backgroundColor: colors[getKeyFromLabel(job.where)],
                background: `linear-gradient(270deg, rgba(0,0,0,0) 20%, ${colors[getKeyFromLabel(job.where)]} 100%)`,

                height: 1,
                width: 1,
                zIndex: -1,
                filter: 'blur(12px)',
              }}></Box>
            <Typography variant='h2'>{job.where}</Typography>
            <Typography variant='subtitle2'>
              {job.from} {job.to} {dateDiff(job.from, job.to)}
            </Typography>
            <List dense>
              {job.achievements.map((achievement, i) => (
                <ListItem key={i}>
                  <ListItemIcon sx={{minWidth: 0, pr: 1}}>
                    <KeyboardDoubleArrowRight />
                  </ListItemIcon>
                  <ListItemText primary={<Typography>{achievement}</Typography>} />
                </ListItem>
              ))}
            </List>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default Experience
