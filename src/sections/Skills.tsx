import {useTheme} from '@mui/material'
import React from 'react'

import DATA from '../API/data'
import SkillIconCards from '../components/SkillIconCards'

const Skills = (): JSX.Element => {
  const theme = useTheme()

  return (
    <>
      <SkillIconCards categories={DATA.TECH_STACK} backgroundColor={theme.palette.primary.dark} />
      <SkillIconCards categories={DATA.SOFT_STACK} backgroundColor={theme.palette.secondary.dark} />
    </>
  )
}
export default Skills
