import React from 'react'
import {IconButton} from '@mui/material'
import {openInNewTab} from '../utils/utils'

export type SocialIconButton = {label: string; url: string; Icon: any}

const SocialIconButton = ({label, url, Icon}: SocialIconButton): JSX.Element => (
  <IconButton aria-label={label} sx={{color: 'whitesmoke'}} onClick={() => openInNewTab(url)}>
    <Icon fontSize='large' />
  </IconButton>
)

export default SocialIconButton
