import React, {useEffect, useState} from 'react'
import {createTheme, CssBaseline, Grid, ThemeProvider} from '@mui/material'
import LandingCard from './sections/LandingCard'
import Skills from './sections/Skills'
import {SECTIONS} from './API/data'
import {getKeyFromLabel} from './utils/utils'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import About from './sections/About'

const mode: any = 'dark'

const theme = createTheme({
  typography: {fontFamily: '"Public Sans", sans-serif'},
  palette: {
    mode: mode,
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ff0000',
    },

    background: mode === 'dark' ? {default: 'rgb(22, 28, 36)', paper: 'rgb(33, 43, 54)'} : {},
  },
})

const App = () => {
  const sectionKeys = SECTIONS.map(section => getKeyFromLabel(section.label))
  const [section, setSection] = useState<string>(sectionKeys[0])
  const [chill, setChill] = useState<boolean>(false)

  useEffect(() => {
    setChill(section === 'chill')
  }, [section])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid item container spacing={2} padding={2}>
        <Grid item xs={12}>
          <LandingCard {...{section, setSection, chill, setChill}} />
        </Grid>
        <Grid item xs={12}>
          {section === sectionKeys[0] && <About />}
          {section === sectionKeys[1] && <Skills />}
          {section === sectionKeys[2] && <Experience />}
          {section === sectionKeys[3] && <Projects />}
          {section === sectionKeys[4] && <Education />}
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
export default App
