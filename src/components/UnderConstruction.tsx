import React, {useState} from 'react'
import {Dialog, DialogTitle, DialogContentText, DialogActions, Button, DialogContent} from '@mui/material'

const UnderConstruction = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(true)
  //TODO: Cookies
  return (
    <>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>Under construction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hey, thanks for visiting my website, this site is under construction yet but feel free to visit it and check
            it whenever you want
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => setOpenModal(false)}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default UnderConstruction
