import React from 'react'
import DATA, {KEYS} from '../API/data'
import {getKeyFromLabel, tanHead} from '../utils/utils'
import Timeline from '../components/Timeline'
import {Work} from '@mui/icons-material'

const Experience = (): JSX.Element => {
  tanHead(KEYS.EXPERIENCE)

  const colors = {
    [getKeyFromLabel('Redux')]: 'rgba(9, 66, 156, 0.5)',
    [getKeyFromLabel('Deft')]: 'rgba(0, 255, 255, 0.5)',
    [getKeyFromLabel('Alert Logic')]: 'rgba(254, 97, 22, 0.5)',
    [getKeyFromLabel('CIER-Sur')]: 'rgba(142, 36, 170, 0.5)',
  }

  return <Timeline items={DATA.EXPERIENCE} colors={colors} BulletIcon={Work} />
}

export default Experience
