import React, {useState} from 'react'
import {Grid} from '@mui/material'
import DATA, {KEYS} from '../API/data'
import ImagesCard from '../components/ImagesCard'
import ImageModal from '../components/ImageModal'
import {sectionTitle} from '../utils/utils'

export type CardItem = {title: string; description: string; images: string[]}

const Geek = (): JSX.Element => {
  const [imageModal, setImageModal] = useState<string>('')
  sectionTitle(KEYS.GEEK)

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
