import React from 'react'
import {EDUCATION} from '../API/data'
import {getKeyFromLabel} from '../utils/utils'
import Timeline from '../components/Timeline'
import {School} from '@mui/icons-material'

const Education = () => {
  const colors = {
    [getKeyFromLabel('Universidad del Valle')]: 'rgba(210, 0, 0, 0.5)',
  }

  return <Timeline items={EDUCATION} colors={colors} BulletIcon={School} />
}

export default Education
