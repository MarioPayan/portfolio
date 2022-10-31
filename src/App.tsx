import React, {useEffect, useState} from 'react'
import {createTheme, CssBaseline, Grid, ThemeProvider} from '@mui/material'
import UnderConstruction from './components/UnderConstruction'
import {Mode} from './utils/types'
import DATA, {KEYS} from './API/data'
// Sections
import LandingCard from './sections/LandingCard'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Music from './sections/Music'
import Traveling from './sections/Traveling'
import Dogs from './sections/Dogs'
import Geek from './sections/Geek'
import Roles from './sections/Roles'
import Films from './sections/Films'
import Random from './sections/Random'
import BusinessAboutMe from './sections/About'
import Sports from './sections/Sports'

const mode: 'light' | 'dark' = 'dark'

const theme = createTheme({
  typography: {fontFamily: '"Public Sans", sans-serif'},
  palette: {
    mode: mode,
    primary: {
      main: 'rgba(0,188,212, 1)',
    },

    background: mode === 'dark' ? {default: 'rgb(22, 28, 36)', paper: 'rgb(33, 43, 54)'} : {},
  },
})

const App = (): JSX.Element => {
  const path = window.location.pathname.split('/')
  const urlSection = path.length === 2 ? path[1].toUpperCase() : ''
  const urlMode = urlSection ? DATA.CHILL_SECTIONS.map(cs => cs.key).includes(urlSection) ? KEYS.CHILL : KEYS.BUSINESS : ''
  const [section, setSection] = useState<string>(urlSection || DATA.BUSINESS_SECTIONS[0].key)
  const [mode, setMode] = useState<Mode>(urlMode || KEYS.BUSINESS)

  useEffect(() => {
    if (section === KEYS.CHILL) {
      setMode(KEYS.CHILL)
      setSection(DATA.CHILL_SECTIONS[0].key)
    }
    if (section === KEYS.BUSINESS) {
      setMode(KEYS.BUSINESS)
      setSection(DATA.BUSINESS_SECTIONS[0].key)
    }
  }, [section])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid item container spacing={2} padding={2}>
        <Grid item xs={12}>
          <LandingCard {...{section, setSection, mode}} />
        </Grid>
        <Grid item xs={12}>
          {section === KEYS.ABOUT_ME_BUSINESS && <BusinessAboutMe />}
          {section === KEYS.SKILLS && <Skills />}
          {section === KEYS.EXPERIENCE && <Experience />}
          {section === KEYS.PROJECTS && <Projects />}
          {section === KEYS.EDUCATION && <Education />}
          {section === KEYS.MUSIC && <Music />}
          {section === KEYS.ABOUT_ME_CHILL && <BusinessAboutMe />}
          {section === KEYS.TRAVELING && <Traveling />}
          {section === KEYS.DOGS && <Dogs />}
          {section === KEYS.GEEK && <Geek />}
          {section === KEYS.ROLES && <Roles />}
          {section === KEYS.FILMS && <Films />}
          {section === KEYS.SPORTS && <Sports />}
          {section === KEYS.RANDOM && <Random />}
        </Grid>
      </Grid>
      <UnderConstruction />
    </ThemeProvider>
  )
}
export default App
