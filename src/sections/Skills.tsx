import {useTheme} from '@mui/material'
import React from 'react'

import DATA, {KEYS} from '../API/data'
import SkillIconCards from '../components/SkillIconCards'
import {tanHead} from '../utils/utils'

const Skills = (): JSX.Element => {
  const theme = useTheme()

  tanHead(KEYS.SKILLS)

  return (
    <>
      <SkillIconCards categories={DATA.TECH_STACK} backgroundColor={theme.palette.primary.dark} />
      <SkillIconCards categories={DATA.SOFT_STACK} backgroundColor={theme.palette.secondary.dark} />
    </>
  )
}
export default Skills
