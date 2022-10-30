import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'

export type CardItem = {title: string; description: string; images: string[]}

const Geek = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')

  return (
    <Grid item container xs={12} spacing={3}>
      {DATA.GEEK.sections.map(geek => (
        <ImagesCard
          title={geek.title}
          description={geek.description}
          images={geek.images}
          onImage={setImageModal}
          key={geek.title}/>
      ))}
      <ImageModal image={imageModal} onClose={() => setImageModal('')} />
    </Grid>
  )
}

export default Geek
