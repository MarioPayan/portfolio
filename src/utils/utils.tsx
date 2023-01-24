import React from 'react'

import {Typography} from '@mui/material'

export const image404 = 'images/404.jpg'

export const dateDiff = (dateA: string, dateB: string, onlyYears = false): string => {
  const getTime = (date: string): number => (date ? new Date(date).getTime() : new Date().getTime())
  const daysDiff = Math.floor((getTime(dateB) - getTime(dateA)) / (1000 * 60 * 60 * 24))
  let timeDiff = 'Just started'
  const years = Math.floor(daysDiff / 365)
  const yearsDiff = years >= 1 ? `${years} ${years === 1 ? 'year' : 'years'}` : ''
  const months = Math.floor(daysDiff / 30) % 12
  const monthsDiff = months >= 1 ? `${months} ${months === 1 ? 'month' : 'months'}` : ''
  if (onlyYears) {
    return `${years}${months >= 1 ? '+' : ''} ${years === 1 ? 'year' : 'years'}`
  }
  if (yearsDiff && monthsDiff) timeDiff = `${yearsDiff}, ${monthsDiff}`
  else if (yearsDiff || monthsDiff) timeDiff = `${yearsDiff}${monthsDiff}`
  return `${timeDiff}`
}

export const getAssetURL = (url: string): string => (url ? `${process.env.PUBLIC_URL}/${url}` : image404)

export const getDevIconURL = (url: string): string => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${url}`

export const getLabelFromKey = (key: string): string => key
  ?.split('_')
  .map(w => (w.length ? `${w.charAt(0).toUpperCase()}${w.slice(1)}` : w))
  .filter(w => w)
  .join(' ') || key

export const getKeyFromLabel = (label: string): string => label.toLowerCase().split(' ').join('_')

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const sectionTitle = (key: string) => {
  window.history.replaceState(null, '', `/${getKeyFromLabel(key)}`)
}

export const RobotoTypography = (props: any) => (
  <Typography {...props} sx={{fontFamily: 'Roboto, "Public Sans", sans-serif', ...props.sx}}>
    {props.children}
  </Typography>
)
