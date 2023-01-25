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
import {Box, Divider, Grid, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {KeyboardDoubleArrowRight} from '@mui/icons-material'
import {dateDiff, getKeyFromLabel, RobotoTypography} from '../utils/utils'

export type TimeLineItem = {where: string; from: string; to: string; position: string; achievements: string[]}
export type Colors = {[key: string]: string}
export type Timeline = {items: TimeLineItem[]; colors: Colors; BulletIcon: React.ComponentType}

const Timeline = ({items, colors, BulletIcon}: Timeline): JSX.Element => {
  const sortFrom = (a: TimeLineItem, b: TimeLineItem): number => new Date(b.from).getTime() - new Date(a.from).getTime()

  const leftAlignTimeline = {
    pl: {sm: 0, md: 5},
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
  }

  const DownText = ({text}: {text: string}) => <span style={{opacity: '0.5'}}>{text}</span>

  const changeDateFormat = (date: string) => {
    const [year, month] = date.split('-')

    return `${new Date(parseInt(year), parseInt(month) - 1).toLocaleString('en-US', {month: 'short'})} ${year}`
  }

  const getLinearGradient = (item: TimeLineItem, percentage = 70) => `linear-gradient(90deg, ${colors[getKeyFromLabel(item.where)]} 0%, rgba(0,0,0,0) ${percentage}%)`

  return (
    <TimelineMUI sx={leftAlignTimeline}>
      {items.sort(sortFrom).map((item: TimeLineItem, i: number) => (
        <TimelineItem key={i} sx={{pb: 1}}>
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
                background: getLinearGradient(item),
                height: 1,
                width: 1,
                zIndex: -1,
                filter: 'blur(14px)',
              }}></Box>
            <RobotoTypography
              variant='h4'
              sx={{pl: 1, width: {xs: 'unset', sm: 'max-content'}, typography: {sm: 'h4', xs: 'h6'}}}>
              {item.position}
              <Divider sx={{height: 2, borderRadius: 10, background: getLinearGradient(item, 100)}} />
            </RobotoTypography>
            <Grid item container sx={{pl: 4, width: {xs: 'unset', sm: 'max-content'}}}>
              <Grid item>
                <RobotoTypography variant='h5' sx={{typography: {sm: 'h5', xs: 'subtitle1'}}}>
                  <DownText text='At ' />
                  {item.where}
                </RobotoTypography>
              </Grid>
              <Grid item sx={{display: {sm: 'flex', xs: 'none'}}}>
                <RobotoTypography
                  variant='h6'
                  alignSelf='flex-end'
                  sx={{pl: 1, pb: 0.4, typography: {sm: 'h6', xs: 'body1'}}}>
                  <DownText text='From' /> {changeDateFormat(item.from)} <DownText text='to ' />
                  {item.to ? changeDateFormat(item.to) : 'present'}. {`(${dateDiff(item.from, item.to)})`}
                </RobotoTypography>
              </Grid>
              <Grid item sx={{display: {sm: 'none', xs: 'flex'}}}>
                <RobotoTypography
                  variant='h6'
                  alignSelf='flex-end'
                  sx={{pl: 0.4, pb: 0.4, typography: {sm: 'h6', xs: 'subtitle2'}}}>
                  <DownText text={dateDiff(item.from, item.to)} />
                </RobotoTypography>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{height: 2, borderRadius: 10, background: getLinearGradient(item, 100)}} />
              </Grid>
            </Grid>
            <List dense>
              {item.achievements.map((achievement: string, i: number) => (
                <ListItem key={i} sx={{py: 0}}>
                  <ListItemIcon sx={{minWidth: 0, pr: 1}}>
                    <KeyboardDoubleArrowRight />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <RobotoTypography variant='h6' sx={{typography: {sm: 'h6', xs: 'body1'}}}>
                        {achievement}
                      </RobotoTypography>
                    }/>
                </ListItem>
              ))}
            </List>
            <Divider sx={{height: 4, borderRadius: 10, background: getLinearGradient(item)}} />
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineMUI>
  )
}

export default Timeline
