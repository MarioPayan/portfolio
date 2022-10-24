import {useTheme} from '@mui/material'
import React from 'react'

import {SOFT_STACK, TECH_STACK} from '../API/data'
import SkillIconCards from '../components/SkillIconCards'

const Skills = (): JSX.Element => {
  const theme = useTheme()

  return (
    <>
      <SkillIconCards categories={TECH_STACK} backgroundColor={theme.palette.primary.dark} />
      <SkillIconCards categories={SOFT_STACK} backgroundColor={theme.palette.secondary.dark} />
    </>
  )
}
export default Skills
