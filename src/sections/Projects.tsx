import React, {useState} from 'react'
import {ExpandLess, ExpandMore, Lock} from '@mui/icons-material'
import {Grid, Typography, Paper, Button, Collapse} from '@mui/material'
import {Box} from '@mui/system'
import {PROJECTS} from '../API/data'
import {getAssetURL, getKeyFromLabel, image404, openInNewTab} from '../utils/utils'

export type Project = {label: string; description: string; image: string; stack: string[]; link?: string}

const Projects = (): JSX.Element => {
  const [showDescription, setShowDescription] = useState<{[key: string]: boolean}>({})

  const handleShowDescription = (key: string) => {
    if (key in showDescription) {
      setShowDescription({...showDescription, [key]: !showDescription[key]})
    } else {
      setShowDescription({...showDescription, [key]: true})
    }
  }

  return (
    <Grid item container xs={12} spacing={4}>
      {PROJECTS.map((project: Project, i: number) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={i}>
          <Paper
            elevation={5}
            sx={{
              position: 'relative',
              minHeight: 300,
              height: 'auto',
              maxWidth: 440,
              minWidth: 300,
              borderRadius: '25px',
              mx: 'auto',
            }}>
            <img
              alt={project.label}
              src={getAssetURL(project.image || image404)}
              style={{
                position: 'absolute',
                width: '-webkit-fill-available',
                height: '-webkit-fill-available',
                borderRadius: '25px',
              }}/>
            <Box
              sx={{
                position: 'absolute',
                height: 1,
                width: 1,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
                borderRadius: '20px',
              }}/>
            <Grid item container sx={{position: 'absolute', height: 1, p: 1}} alignContent='flex-end'>
              <Grid item>
                <Typography variant='h6'>{project.label}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Collapse in={showDescription[getKeyFromLabel(project.label)]} orientation='vertical'>
                  <Typography>{project.description}</Typography>
                </Collapse>
              </Grid>
              <Grid item container justifyContent='space-between'>
                <Button
                  onClick={() => handleShowDescription(getKeyFromLabel(project.label))}
                  endIcon={showDescription[getKeyFromLabel(project.label)] ? <ExpandMore /> : <ExpandLess />}>
                  Description
                </Button>
                <Button
                  disabled={!project.link}
                  onClick={() => project?.link && openInNewTab(project.link)}
                  variant='contained'
                  endIcon={!project?.link && <Lock />}>
                  Visit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default Projects
