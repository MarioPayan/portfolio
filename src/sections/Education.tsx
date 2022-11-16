import React from 'react'
import DATA, {KEYS} from '../API/data'
import {getKeyFromLabel, sectionTitle} from '../utils/utils'
import Timeline from '../components/Timeline'
import {School} from '@mui/icons-material'

const Education = (): JSX.Element => {
  sectionTitle(KEYS.EDUCATION)

  const colors = {
    [getKeyFromLabel('Universidad del Valle')]: 'rgba(210, 0, 0, 0.5)',
  }

  return <Timeline items={DATA.EDUCATION} colors={colors} BulletIcon={School} />
}

export default Education
