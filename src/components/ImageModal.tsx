import React from 'react'
import {Dialog} from '@mui/material'

export type ImageModal = {image: string; onClose: any}

const ImageModal = ({image, onClose}: ImageModal): JSX.Element => (
  <Dialog // TODO: Improve
    open={!!image}
    onClose={() => onClose()}
    maxWidth='lg'>
    <img src={image} alt='TODO' />
  </Dialog>
)

export default ImageModal
