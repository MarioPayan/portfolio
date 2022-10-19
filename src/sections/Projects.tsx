import React, {useState} from 'react'
import {Lock} from '@mui/icons-material'
import {Grid, Typography, Paper, Button, Collapse} from '@mui/material'
import {Box} from '@mui/system'
import {PROJECTS} from '../API/data'
import {getKeyFromLabel, image404, openInNewTab} from '../utils/utils'

const Projects = () => {
  const [showDescription, setShowDescription] = useState<any>({})

  const handleShowDescription = (key: string) => {
    if (key in showDescription) {
      setShowDescription({...showDescription, [key]: !showDescription[key]})
    } else {
      setShowDescription({...showDescription, [key]: true})
    }
  }

  return (
    <Grid item container xs={12} spacing={2}>
      {PROJECTS.map((project: any, i: number) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Paper elevation={5} sx={{position: 'relative', height: 280, borderRadius: '25px'}}>
            <img
              alt={project.label}
              src={project.image || image404}
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
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%)',
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
                <Button onClick={() => handleShowDescription(getKeyFromLabel(project.label))}>
                  {`${showDescription[getKeyFromLabel(project.label)] ? 'Hide' : 'Show'} Description`}
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
