import React, {LegacyRef, useEffect, useState} from 'react'
import {NextPage} from 'next'
import Head from 'next/head'
import {useInView} from 'react-intersection-observer'
import LandingCard from '../components/landingCard'
import TopBar from '../components/topBar'
import SkillChips from '../components/skillChips'
import TimeLine from '../components/timeline'
import LandingBackground from '../components/landingBackground'
import ProjectCards from '../components/projectCards'
import UnderConstruction from '../components/underConstruction'
import {Grid, Grow, Stack} from '@mui/material'
import Context from '../components/context'
import {Mode, Section} from '../types/types'
import {favicon} from '../utils/assets'
import Hobby from '../components/hobby'

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('')
  const [watchScroll, setWatchScroll] = useState(true)
  const inViewOptions = {
    skip: !watchScroll,
    threshold: (typeof window !== 'undefined' && window.innerHeight) < 1000 ? 0.1 : 0.6,
    fallbackInView: true,
  }
  const [aboutRef, aboutInView] = useInView(inViewOptions)
  const [hardSkillsRef, hardSkillsInView] = useInView(inViewOptions)
  const [softSkillsRef, softSkillsInView] = useInView(inViewOptions)
  const [experienceRef, experienceInView] = useInView(inViewOptions)
  const [projectsRef, projectsInView] = useInView(inViewOptions)
  const [educationRef, educationInView] = useInView(inViewOptions)

  const [aboutShowed, setAboutShowed] = useState(aboutInView)
  const [hardSkillShowed, setCodeSkillShowed] = useState(hardSkillsInView)
  const [softSkillShowed, setSoftSkillShowed] = useState(softSkillsInView)
  const [experienceShowed, setExperienceShowed] = useState(experienceInView)
  const [projectsShowed, setProjectsShowed] = useState(projectsInView)
  const [educationShowed, setEducationShowed] = useState(educationInView)

  useEffect(() => {
    lastSectionVisible()
    if (aboutInView) setAboutShowed(true)
  }, [aboutInView])
  useEffect(() => {
    lastSectionVisible()
    if (hardSkillsInView) setCodeSkillShowed(true)
  }, [hardSkillsInView])
  useEffect(() => {
    lastSectionVisible()
    if (softSkillsInView) setSoftSkillShowed(true)
  }, [softSkillsInView])
  useEffect(() => {
    lastSectionVisible()
    if (experienceInView) setExperienceShowed(true)
  }, [experienceInView])
  useEffect(() => {
    lastSectionVisible()
    if (projectsInView) setProjectsShowed(true)
  }, [projectsInView])
  useEffect(() => {
    lastSectionVisible()
    if (educationInView) setEducationShowed(true)
  }, [educationInView])

  const onChangeTab = () => {
    const sections = [aboutShowed, hardSkillShowed, softSkillShowed, experienceShowed, projectsShowed, educationShowed]
    if (sections.every(e => e)) {
      setWatchScroll(false)
    }
  }

  const growComponent = (
    Component: (props: any) => JSX.Element,
    props: {[key: string]: unknown},
    id: string,
    ref: LegacyRef<HTMLDivElement>,
    inView: boolean
  ) => {
    const styleInherit: React.CSSProperties = {
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit',
      position: 'relative',
    }
    const invisibleStyle: React.CSSProperties = {
      display: 'flex',
      width: '1px',
      height: '100%',
      margin: '0',
      padding: '0',
      position: 'absolute',
      scrollMarginTop: '4rem',
    }
    return (
      <>
        <Grow in={inView}>
          <Grid container style={{...styleInherit}}>
            <div id={id} ref={ref} style={invisibleStyle}></div>
            <Component {...props} />
          </Grid>
        </Grow>
      </>
    )
  }

  const lastSectionVisible = (): void => {
    if (aboutInView) setActiveSection('about')
    else if (hardSkillsInView) setActiveSection('hardSkills')
    else if (softSkillsInView) setActiveSection('softSkills')
    else if (experienceInView) setActiveSection('experience')
    else if (educationInView) setActiveSection('education')
    else if (projectsInView) setActiveSection('projects')
    else setActiveSection('')
  }

  const businessStack = () => (
    <Stack
      direction='column'
      spacing={10}
      padding={3}
      display='flex'
      alignItems='center'
      sx={{paddingTop: 8}}
      justifyContent='center'>
      {growComponent(LandingCard, {}, 'about', aboutRef, aboutShowed)}
      {growComponent(SkillChips, {typeSkills: 'hardSkills'}, 'hardSkills', hardSkillsRef, hardSkillShowed)}
      {growComponent(SkillChips, {typeSkills: 'softSkills'}, 'softSkills', softSkillsRef, softSkillShowed)}
      {growComponent(TimeLine, {typeItems: 'experiences'}, 'experience', experienceRef, experienceShowed)}
      {growComponent(ProjectCards, {}, 'projects', projectsRef, projectsShowed)}
      {growComponent(TimeLine, {typeItems: 'education'}, 'education', educationRef, educationShowed)}
    </Stack>
  )

  const funStack = () => (
    <Stack
      direction='column'
      spacing={10}
      padding={3}
      display='flex'
      alignItems='center'
      sx={{paddingTop: 8}}
      justifyContent='center'>
      {growComponent(LandingCard, {}, 'about', aboutRef, aboutShowed)}
      {growComponent(Hobby, {section: 'music'}, 'music', null, true)}
      {growComponent(Hobby, {section: 'traveling'}, 'traveling', null, true)}
      {growComponent(Hobby, {section: 'dogs'}, 'dogs', null, true)}
      {growComponent(Hobby, {section: 'geek'}, 'geek', null, true)}
      {growComponent(Hobby, {section: 'roles'}, 'roles', null, true)}
      {growComponent(Hobby, {section: 'random'}, 'random', null, true)}
      {growComponent(Hobby, {section: 'films'}, 'films', null, true)}
      {growComponent(Hobby, {section: 'sports'}, 'sports', null, true)}
    </Stack>
  )

  return (
    <Context.Consumer>
      {({t, mode}) => (
        <>
          <Head>
            <title>{t('personal.name')}</title>
            <link rel='shortcut icon' href={favicon} />
          </Head>
          <TopBar
            sections={t('sections', {returnObjects: true}) as unknown as Section[]}
            lastSectionActive={activeSection}
            onChangeTab={() => onChangeTab()}/>
          <LandingBackground />
          {{business: businessStack, fun: funStack}[mode as Mode]()}
          <UnderConstruction></UnderConstruction>
        </>
      )}
    </Context.Consumer>
  )
}

export default Home
