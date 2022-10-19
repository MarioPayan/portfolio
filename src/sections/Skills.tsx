import React from 'react'

import {SOFT_STACK, TECH_STACK} from '../API/data'
import SkillIconCards from '../components/SkillIconCards'

const Skills = () => {
  return (
    <>
      <SkillIconCards skills={TECH_STACK} />
      <SkillIconCards skills={SOFT_STACK} />
    </>
  )
}
export default Skills
