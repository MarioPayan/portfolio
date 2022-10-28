import React, {useEffect, useState} from 'react'
import {createTheme, CssBaseline, Grid, ThemeProvider} from '@mui/material'
import LandingCard from './sections/LandingCard'
import Skills from './sections/Skills'
import {BUSINESS_SECTIONS} from './API/data'
import {getKeyFromLabel} from './utils/utils'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import About from './sections/About'
import UnderConstruction from './components/UnderConstruction'
import {Mode} from './utils/types'

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
  const sectionKeys = BUSINESS_SECTIONS.map(section => getKeyFromLabel(section.label))
  const [section, setSection] = useState<string>(sectionKeys[0])
  const [mode, setMode] = useState<Mode>('business')

  useEffect(() => {
    if (section === 'chill') {
      setMode('chill')
      setSection(sectionKeys[0])
    }
    if (section === 'business') {
      setMode('business')
      setSection(sectionKeys[0])
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
          {section === sectionKeys[0] && <About mode={mode} />}
          {section === sectionKeys[1] && <Skills />}
          {section === sectionKeys[2] && <Experience />}
          {section === sectionKeys[3] && <Projects />}
          {section === sectionKeys[4] && <Education />}
        </Grid>
      </Grid>
      <UnderConstruction />
    </ThemeProvider>
  )
}
export default App
